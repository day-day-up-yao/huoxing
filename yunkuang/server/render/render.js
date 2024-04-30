import path from 'path'
import React from 'react'
import Cookies from 'js-cookie'
// import { renderToNodeStream } from 'react-dom/server'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { matchRoutes } from 'react-router-config'
import { ChunkExtractor } from '@loadable/server'
import { I18nextProvider } from 'react-i18next'

import { isPc, isWechat, isJson, cookiesName, isQuattroWallet, isSecure1475 } from '../../assets/public/js/index'
import layout from './layout'
import layoutM from './layout-m'
import serverStore from './store'
import configServer from '../../config/config-server'

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
    // res.logger.error(req.hostname)
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

    /** 默认语言 */
    // let lang = req.language
    // if (typeof window !== 'undefined') {
    //     console.log(window.location.href)
    // }
    // console.log(req)
    let lang = 'en-us'
    if (isSecure1475(req)) lang = 'en-us'
    if (req.cookies[cookiesName.language]) {
        lang = req.cookies[cookiesName.language]
    } else {
        Cookies.set(cookiesName.language, lang)
    }
    if (process.env.NODE_LANG === 'jp') lang = 'ja-jp' // 日文版本强制请求日文接口数据
    req.i18n.changeLanguage(lang)

    /** 判断当前访问终端，开发环境以NODE_ENV判断，线上以域名判断 */
    let platform = 'pc'
    if (!isPc(req)) platform = 'mob'

    /** 生成默认数据与路由匹配 */
    // 可通过此参数传递给routes做逻辑判断：Tips：browser/index.js存在同样逻辑
    const routesParams = {
        isQuattroWallet: isQuattroWallet(req), // 是否是日本域名quattro-wallet.com
        issecure1475: isSecure1475(req) // 是否是美国代理商域名www.secure1475.com || secure1475.com
    }
    const routesLast = platform === 'pc' ? routes(routesParams) : routesM(routesParams)
    // const routesLast = routes(routesParams)
    const branch = matchRoutes(routesLast, req.path)
    const store = serverStore()
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
    global.reduxStore = store // 挂载到全局对象上，ajax未登录时使用

    /** @desc 用户信息设置。注:若页面路由添加cdn用appWrapper.js设置，这里注释 */
    promises.push(
        store.dispatch.public.setUserInfo({
            accountId: req.cookies[cookiesName.accountId],
            cToken: req.cookies[cookiesName.cToken],
            auToken: req.cookies[cookiesName.auToken],
            userId: req.cookies[cookiesName.userId]
        })
    )

    let reactCompsErr = null
    // 默认数据请求
    let initProps = {}
    await Promise.all(promises).then((res) => {
        res.map((item) => {
            const isObj = Object.prototype.toString.call(item) === '[object Object]' // 排除undefined，null等
            const notGetUserInfo = isObj && (!item.hasOwnProperty('type') || item.type !== 'get-user-info') && !item.hasOwnProperty('data') // 排除获取用户登录信息actions返回
            if (notGetUserInfo) {
                initProps = Object.assign(initProps, item)
            }
        })
    }).catch((err) => {
        reactCompsErr = err
    })

    const isMatch = urlMatch(req.path, routesLast)
    if (!isMatch) {
        await next()
    } else {
        /** @desc clienLink */
        const { clientLink } = initProps
        if (clientLink) {
            if (platform === 'mob' && clientLink === 'onlyPc') platform = 'pc'
            if (platform === 'pc' && clientLink === 'onlyMob') platform = 'mob'
        }

        /** 利用extractor生成主要jsx内容 */
        let jsx = null
        let html = ''

        // 当前没有错误情况下才开始尝试渲染正式App
        if (!reactCompsErr) {
            try {
                jsx = webExtractor.collectChunks(<Provider store={store}>
                    <StaticRouter
                        location={req.originalUrl}
                        context={{}}>
                        <I18nextProvider i18n={req.i18n}>
                            <App platform={platform} {...initProps} routesParams={routesParams} />
                        </I18nextProvider>
                    </StaticRouter>
                </Provider>)
                /** 建立stream渲染中部 */
                // const stream = renderToNodeStream(jsx)
                html = renderToString(jsx)
            } catch (err) {
                reactCompsErr = err
            }
        }

        /** 错误组件渲染
         * 如果node程序或者不是react程序报错则使用express的errorHandle，也就是404页面
         * 如果是react组件报错则使用此错误处理组件
         * 如果是此错误组件出错则也使用express的errorHandle
         * */
        let errObjProps = null
        if (reactCompsErr) {
            errObjProps = {
                platform: platform,
                message: 'unknown error',
                stack: 'unknown stack'
            }
            if (reactCompsErr instanceof Error) {
                const errMsg = reactCompsErr.message.replace(/Error: /g, '')
                if (isJson(errMsg)) {
                    res.logger.error({
                        ...JSON.parse(errMsg),
                        stack: reactCompsErr.stack
                    })
                } else {
                    res.logger.error({
                        message: errMsg,
                        stack: reactCompsErr.stack
                    })
                }

                errObjProps = {
                    ...errObjProps,
                    message: errMsg,
                    stack: reactCompsErr.stack
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
        const isSeculink = req.hostname
        const layoutParams = { initState, initProps, styles, scripts, links, platform, isWx, errObjProps, isSeculink }
        let htmlTemplate = ''
        if (platform === 'pc') {
            htmlTemplate = layout(layoutParams)
        } else {
            htmlTemplate = layoutM(layoutParams)
        }

        /** getInitialProps中返回customRes=true时，不使用这里的res.send，执行其中的res调用 */
        !initProps.customRes && res.send(htmlTemplate.header + html + htmlTemplate.footer)

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
