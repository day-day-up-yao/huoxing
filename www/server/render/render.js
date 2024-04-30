import path from 'path'
import React from 'react'
// import { renderToNodeStream } from 'react-dom/server'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { matchRoutes } from 'react-router-config'
import { ChunkExtractor } from '@loadable/server'
import { I18nextProvider } from 'react-i18next'
import Cookies from 'js-cookie'

// import { getUserInfo } from 'multiRedux/actions/login'
// import { getFooterData } from 'multiRedux/actions/public'
import { isPc, isWechat, mixUrl, isJson, naGacom, isMarsbitco, isMarsbitcc, isMarstelegram, isMarsshare, isMarsbitinfo, cookiesName } from 'multiPublic/index'
import layout from './layout'
import layoutM from './layout-m'
import serverStore from './store'
import configServer from '../../config/config-server'
import { replaceDomain } from '../../_multiappsharing/public'

/**
 * @Desc 匹配当前请求url是否跟客户端路由一致 不一致则执行next 进行静态资源处理等
 * @param {url, routesParam}
 */
const urlMatch = (url, routesParam) => {
    let isExit = false
    const hasKey = (arr) => {
        for (let val of arr) {
            let hasPath = null
            if (val.path) {
                const params = {}
                params.path = val.path
                if (val.exact) params.exact = val.exact
                if (val.strict) params.strict = val.strict
                hasPath = matchPath(url, params)
            }

            const isObj = Object.prototype.toString.call(hasPath) === '[object Object]'
            if (isObj) {
                isExit = true
                return true
            }
            if (val.routes && !isObj) {
                hasKey(val.routes)
            }
        }
    }
    hasKey(routesParam)
    return isExit
}

/**
 * @Desc 服务端渲染
 */
const devEnv = process.env.NODE_ENV === 'development'
const rootPath = path.join(__dirname).split('server')[0]
const stasFileFolder = devEnv ? '_dist' : 'build'
const nodeStats = path.join(`${rootPath}server/${stasFileFolder}/loadable-stats.json`)
const webStats = path.join(`${rootPath}static/${stasFileFolder}/loadable-stats.json`)

export default async (req, res, next) => {
    /**  生成服务端extractor */
    const extractorParams = { statsFile: nodeStats, entrypoints: ['App'] }
    if (!devEnv) extractorParams.outputPath = configServer.loadableStatsOutputPath
    const nodeExtractor = new ChunkExtractor(extractorParams)
    const { default: App } = nodeExtractor.requireEntrypoint()
    const routes = App.routes().routes
    const routesM = App.routes().routesM
    const ErrorPage = App.ErrorPage

    /**  生成客户端extractor */
    const webExtractor = new ChunkExtractor({ statsFile: webStats, entrypoints: ['index'] })

    let lang = req.language
    let domain = ''
    const env = process.env.NODE_ENV
    if (env === 'production') {
      if (req.hostname.includes('marstelegram.com')) {
        domain = 'marstelegram.com'
      }
      if (req.hostname.includes('marsbit.cc')) {
        domain = 'marsbit.cc'
      }
      if (req.hostname.includes('marsbit.co')) {
        domain = 'marsbit.co'
      }
    }
    if (env === 'test') domain = 'marslib.com'
    if (req.cookies[cookiesName.language]) {
      lang = req.cookies[cookiesName.language]
    } else {
        Cookies.set(cookiesName.language, lang, { domain: domain })
    }
    const quermlist = req.url.split('=')
    if (quermlist && quermlist[1]) {
      console.log(quermlist[1])
      req.language = quermlist[1]
      lang = quermlist[1]
      Cookies.set(cookiesName.language, quermlist[1], { domain: domain })
    }
    req.i18n.changeLanguage(lang)

    let platform = 'pc'
    if (devEnv) {
        if (!isPc(req)) platform = 'mob'
    } else {
        const mhostlist = ['m.marstelegram.com', 'm.marsbit.cc', 'm.marsshare.cc', 'marsbit.info']
        if (req.hostname === mixUrl.m().split('://')[1] || (mhostlist.indexOf(req.hostname) > -1)) platform = 'mob'
    }
    // const routesParam = platform === 'pc' ? routes : routesM
    /** 生成默认数据与路由匹配 */
    // 可通过此参数传递给routes做逻辑判断：Tips：browser/index.js存在同样逻辑
    const routesParams = {
        isnaGacom: naGacom(req)
    }
    const routesLast = platform === 'pc' ? routes(routesParams) : routesM(routesParams)

    const isMatch = urlMatch(req.path, routesLast)
    if (!isMatch) {
        await next()
    } else {
        /**  生成默认数据与路由匹配 */
        const store = serverStore()
        const branch = matchRoutes(routesLast, req.path)
        const promises = branch.map(({ route, match }) => {
            const getInitialProps = route.component.getInitialProps
            return getInitialProps instanceof Function ? getInitialProps({
                req,
                res,
                match,
                store,
                isServer: true
            }) : Promise.resolve(null)
        })

        /** @desc 用户信息设置
        * 由于CDN之后CDN页面缓存了initailState，路由有可能不走node，故登录完之后界面不能显示登录信息，甚至出现别人的登录信息
        * 由于可能出现的server与client不match问题，jsx中不要直接Cookies.get()
        * 统一登录信息cookie入口放在redux中好处是[1:以后若有需求更新cookie名称，只需要更新统一设置与获取处; 2:由于是redux更新不会存在上面的match问题]
        * 2019-12-4设置用户信息[文件有:server/render.js, browser/AppWrapper.js]
        * */
        /* promises.push(
            store.dispatch(getUserInfo({
                nickName: req.cookies[cookiesName.nickName],
                passportId: req.cookies[cookiesName.passportId],
                iconUrl: req.cookies[cookiesName.iconUrl],
                realAuth: req.cookies[cookiesName.realAuth],
                intro: req.cookies[cookiesName.intro],
                token: req.cookies[cookiesName.token],
                phone: req.cookies[cookiesName.phone]
            }))
        ) */

        let apiErr = null
        // 默认数据请求
        let initProps = {}
        await Promise.all(promises).then((res) => {
            // console.log(res)
            res.map((item) => {
                const isObj = Object.prototype.toString.call(item) === '[object Object]' // 排除undefined，null等
                const notGetUserInfo = isObj && (!item.hasOwnProperty('type') || item.type !== 'get-user-info') && !item.hasOwnProperty('data') // 排除获取用户登录信息actions返回
                if (notGetUserInfo) {
                    initProps = Object.assign(initProps, item)
                }
            })
        }).catch((err) => {
            apiErr = err
        })

        // 如果当前页面只有pc或者只有移动端。通过域名或者请求已经判断为移动或pc，但当前pages中返回clientLink是否只有移动或pc。由此pc或移动返回同样内容
        // 线上通过是否包含m.huoxing24.com/m.marslib.com判断是否为移动端。本地通过process.env.NODE_ENV判断
        // clientLink若为跳转mixUrl，开发环境都不跳转,为服务端正常判断加载页面。
        // clientLink若为onlyMob/onlyPc变现跟线上一致
        /** @desc clienLink
         * 1: pages-m没有对应页面----pc打开移动端的地址m.huoxing24.com
         * 注：在routes/index.js中配置路由并加载pages-m对应的组件
         * onlymob显示跟移动端一模一样
         * minUrl.main()/mixUrl.news()跳转到pc对应地址
         * 2: pages没有对应页面----m端打开pc的地址www.huoxing24.com+news.huoxing24.com+token.huoxing24.com。
         * 注：在routes/index-m.js中配置路由并加载pages中对应的组件
         * onlypc显示跟pc端一模一样
         * mixUrl.m()跳转到m对应地址
         * 3: pages-m与pages都有对应页面，不共用地址[cdn缓存]。只是线上有cdn后端不能判断，转为前端跳转。路由与参数一致，只是域名不同。移动端为m.huoxing24.com，pc端为news.huoxing24.com/www.huoxing24.com/token.huoxing24.com
         * 注：routes/index.js加载pages组件，routes/index-m.js加载pages-m组件[同4]
         * pages-m中填写pc对应的地址mixUrl.news/mixUrl.main
         * pages中填写m对应的地址mixUrl.m
         * 4: pages-m与pages都有对应页面，且共用一个地址[cdn不缓存]。www.huoxing24.com+news.huoxing24.com+token.huoxing24.com。
         * 注：routes/index.js加载pages组件，routes/index-m.js加载pages-m组件[同3]
         * sameUrl--由于线上使用域名判断是否为pc或mob，故若pc与mob使用同于域名地址[不加cdn]，在此需要重新再用clientLink重新判断一次。eg: http://www.cryptoquanter.com/
         * */
        const { clientLink } = initProps
        if (clientLink) {
            if (platform === 'mob' && clientLink === 'onlyPc') platform = 'pc'
            if (platform === 'pc' && clientLink === 'onlyMob') platform = 'mob'
            if (clientLink === 'sameUrl') { // 线上已通过域名判断，若不加CDN，node能获取到UA，在此转换到通过UA判断。并且不用跳转clientLink设置为undefined
                initProps.clientLink = undefined
                if (!isPc(req)) {
                    platform = 'mob'
                } else {
                    platform = 'pc'
                }
            }
        }

        // platform === 'pc' &&
        // await store
        //     .dispatch(getFooterData())
        //     .catch(function (err) {
        //         apiErr = err
        //     })

        const errReport = (err) => {
            if (!(err instanceof Error)) return
            const errMsg = err.message.replace(/Error: /g, '')
            if (isJson(errMsg)) {
                res.logger.error({
                    ...JSON.parse(errMsg),
                    stack: err.stack
                })
            } else {
                res.logger.error({
                    message: errMsg,
                    stack: err.stack
                })
            }
            return errMsg
        }
        // apiErr 请求错误,打印日志
        if (apiErr) errReport(apiErr)

        /** 利用extractor生成主要jsx内容 */
        let jsx = null
        let html = ''

        let errObjProps = null
        try {
            /** 当前没有错误情况下才开始尝试渲染正式App */
            jsx = webExtractor.collectChunks(<Provider store={store}>
                <StaticRouter
                    location={req.originalUrl}
                    context={{}}>
                      <I18nextProvider i18n={req.i18n}>
                        <App platform={platform} {...initProps} routesParams={routesParams}/>
                      </I18nextProvider>
                </StaticRouter>
            </Provider>)

            /** 建立stream渲染中部 */
            // const stream = renderToNodeStream(jsx)
            html = renderToString(jsx)
        } catch (err) {
            /** 错误组件渲染
             * 如果node程序或者不是react程序报错则使用express的errorHandle，也就是404页面
             * 如果是react组件报错则使用此错误处理组件
             * 如果是此错误组件出错则也使用express的errorHandle
             * */
            errObjProps = {
                platform: platform,
                message: 'unknown error',
                stack: 'unknown stack'
            }
            if (err instanceof Error) {
                const errMsg = errReport(err)

                errObjProps = {
                    ...errObjProps,
                    message: errMsg,
                    stack: err.stack
                }
            }

            jsx = webExtractor.collectChunks(<Provider store={store}>
              <I18nextProvider i18n={req.i18n}>
                <StaticRouter
                    location={req.originalUrl}
                    context={{}}>
                    <ErrorPage {...errObjProps} />
                </StaticRouter>
              </I18nextProvider>
            </Provider>)
            html = renderToString(jsx)
        }

        /** 利用extractor获取js+css，并生成html骨架，并渲染头部 */
        let scripts = ''
        const links = webExtractor.getLinkTags()
        const styles = webExtractor.getStyleTags()
        if (devEnv) {
            // 开发环境静态资源在另外一个端口需要添加crossorigin属性
            const scriptCreate = (item) => {
                let scriptsStr = `<script `
                let scriptsStrEnd = `crossorigin></script>`
                Object.keys(item.props).map(function (key, index) {
                    if (key === 'dangerouslySetInnerHTML') {
                        scriptsStrEnd = `crossorigin>${item.props[key]['__html']}</script>`
                    } else {
                        scriptsStr += `${key}="${item.props[key]}" `
                    }
                })
                scripts += scriptsStr + scriptsStrEnd
            }
            webExtractor.getScriptElements().map(function (item, index) {
                if (Array.isArray(item)) {
                    item.map(function (itemIn, indexIn) {
                        scriptCreate(itemIn)
                    })
                } else {
                    scriptCreate(item)
                }
            })
        } else {
            scripts = webExtractor.getScriptTags()
        }

        // 获取redux默认state
        const initState = store.getState()
        const isWx = isWechat(req)
        const isNagalink = req.hostname
        const isMarslibco = isMarsbitco(req)
        const isMarslibcc = isMarsbitcc(req)
        const isMarsgram = isMarstelegram(req)
        const isnewMarsshare = isMarsshare(req)
        const isMarsbitinfolink = isMarsbitinfo(req)
        const layoutParams = { initState, initProps, styles, scripts, links, platform, isWx, errObjProps, isNagalink, isMarslibco, isMarslibcc, isMarsgram, isnewMarsshare, isMarsbitinfolink }
        let htmlTemplate = ''
        if (platform === 'pc') {
            htmlTemplate = layout(layoutParams)
        } else {
            htmlTemplate = layoutM(layoutParams)
        }

        /** getInitialProps中返回customRes=true时，不使用这里的res.send，执行其中的res调用 */
        // 2021-11-26 huoxing24.com域名备灾临时代码
        let lastHtmlStr = htmlTemplate.header + html + htmlTemplate.footer
        !initProps.customRes && res.send(replaceDomain(lastHtmlStr, req))

        // res.write(htmlTemplate.header)
        //
        // stream.pipe(res, { end: false })
        //
        // /** stream完成后渲染尾部 */
        // stream.on('end', () =>
        //     res.end(htmlTemplate.footer)
        // )
    }
}

// 2021-11-26 huoxing24.com域名备灾临时代码 -----> 搜索此注释所有备灾代码都有
// 1: ajaxAxios -----> 接口请求域名api.huoxing24.com(前端由代码判断，后端直接请求专有Ip)
// 2: ajaxAxios -----> 接口返回的Data(前端由代码判断，后端在render.js中最后组合的html字符串中判断)
// 3: mixUrl -----> 返回域.com替换(前端由代码判断，后端在render.js中最后组合的html字符串中判断)
// 4: render.js -----> 服务端渲染(替换html字符串中.com为.cn，替换store中.com为.cn ====> 最终res.send中替换)
// 5: 其它写死的www/news.huoxing24.com ----> 编辑器全局替换为mixUrl
