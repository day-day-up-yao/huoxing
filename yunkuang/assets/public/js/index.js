import axios from 'axios'
// import qs from 'qs'
import { Base64 } from 'js-base64'
import md5 from 'blueimp-md5'
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import { apiHost, apiDomain, apiLoan, ip } from '../../../config/config'

/**
 * @desc 是否是日文版本
 * @method isJp
 */
export const isJp = (process.env.NODE_LANG && process.env.NODE_LANG === 'jp') || (typeof window !== 'undefined' && window.localStorage.getItem('i18nextLng') === 'ja')
/**
 * @desc 是否是 quattro-wallet.com
 */
export const quattroWalletHost = 'www.quattro-wallet.com'
// export const isQuattroWallet = (req) => true
export const isQuattroWallet = (req) => req && typeof window === 'undefined'
    ? (req.hostname || req.headers['x-forwarded-host']) === quattroWalletHost
    : window.location.hostname === quattroWalletHost

/**
 * @desc 是否是 secure1475.com || www.secure1475.com
 */
// export const secure1475list = ['10.0.8.130']
export const secure1475list = ['www.secure1475.com', 'secure1475.com']
export const isSecure1475 = (req) => req && typeof window === 'undefined'
    ? secure1475list.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : secure1475list.indexOf(window.location.hostname) > -1
/**
 * @desc 判断是否是CoCo的域名
 */
export const isCoco = () => {
    if (typeof window === 'undefined') { } else {
        if (window.location.host === 'www.cococoin.com') {
            return true
        } else {
            return false
        }
    }
}

/**
 * @desc 注销或检测到token过期时删除登录cookie信息
 * @method clearLoginCookies()
 */
export const clearLoginCookies = () => {
    let domain = ''
    const env = process.env.NODE_ENV
    if (env === 'test') domain = 'marslib.com'
    if (env === 'production') domain = 'mclouds.com'
    for (let key in cookiesName) {
        // 删除老版本登录信息
        Cookies.remove(cookiesName[key])
        // 删除新版本登录信息
        Cookies.remove(cookiesName[key], { domain: domain })
    }
}

/**
 * @desc ajax请求
 * nodeJs接口请求错误由render.js统一处理; 前端做单独做明确提示。
 * 错误捕获在每个地方都catch并且throw Error，即使上一层已经捕获。不然error.stack不会追溯到错误位置
 * @returns {data/error}
 * @Params {args} args = {type(get/post/complexpost), url, params, contentType, urlSearchParams, formData, noLoading, userDefined, host, transformRequest, noLog, hxApi}
 * @method axiosAjax({
        type: get/post/complexpost,
        url: ',
        contentType: 'application/x-www-form-urlencoded',
        noLoading: true,
        userDefined: {
            'hx-cookie': Base64.encode(JSON.stringify({
                    'passportId': Cookies.get('passportId'),
                    'token': Cookies.get('token')
                }))
        },
        transformRequest: '',
        params: {
            dataone: 'one',
            datatwo: 'two'
        },
        hxApi: true
    })
 */
export const ajaxSignature = () => {
    const platform = 'pc'
    const appSecret = 'Fbz]OdjAyhpqOIKA'
    const nonceArr = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890'
    const timestamp = new Date().getTime()
    let nonce = ''
    for (let i = 0; i < 6; i++) {
        let j = Math.round(Math.random() * nonceArr.length)
        nonce += nonceArr[j]
    }
    const sig = md5('platform=' + platform + '&timestamp=' + timestamp + '&nonce=' + nonce + '&' + appSecret)
    return Base64.encode(JSON.stringify({
        'platform': platform,
        'nonce': nonce,
        'timestamp': timestamp,
        'sig': sig
    }))
}
const removeLoading = () => {
    if (typeof window !== 'undefined' && document.getElementById('ajaxLoading')) {
        const $ajaxLoading = document.getElementById('ajaxLoading')
        $ajaxLoading.parentNode.removeChild($ajaxLoading)
    }
}
const isMcloudsApi = (url) => (url.indexOf('/v1/hashrate') > -1 || url.indexOf('/v1/loan') > -1 || url.indexOf('/v1/hr-loan') > -1)
export const axiosAjax = (args) => new Promise(function (resolve, reject) {
    const {
        type,
        url,
        contentType,
        noLoading, // 是否有加载动画
        noLog, // code不等于1时是否打印日志。[]空数组为都不上报，[-4, 5, 7]当res.data.code为其中一项时就不上报
        userDefined,
        auToken, // 是否需要在header中添加au_token参数
        // cToken, // api请求地址参数中是否存在c_token，默认带有, 传none时去掉
        host,
        transformRequest,
        hxApi // 火星财经接口 true
        // signature // 是否进行签名认证
    } = args
    // const response = args.res // 接口需要登录时传
    const request = args.req || (args.params && args.params.req) // 接口需要登录时传
    if (args.params && args.params.req) delete args.params.req
    const params = args.params
    // console.log(args)
    // const fheaders = new Headers()
    // fheaders.append('Accept-Language', window.localStorage.lang)
    // then为res，cath为err
    const resNotOkLogger = (res, type) => {
        const resTmp = type === 'then' ? res.data : res.response.data
        if (!resTmp.code) return

        let noLogTrue = false // 自定义是否上报日志
        if (noLog && isArray(noLog)) {
            if (noLog.length === 0) {
                noLogTrue = true
            } else {
                for (let val of noLog) {
                    if (res.data && res.data.code && res.data.code === val) {
                        noLogTrue = true
                        break
                    }
                }
            }
        }

        // if (resTmp.code === 30001) {
        //     console.log(resTmp.msg)
        // }

        /** @desc 未登录设置登录弹出 */
        if (resTmp.code === 30000 || resTmp.code === 3018 || resTmp.code === 30001) {
            Cookies.remove(cookiesName.userId)
            Cookies.remove(cookiesName.cToken)
            Cookies.remove(cookiesName.auToken)
            axios({
                url: '/signup'
            })
            if (typeof window !== 'undefined') {
                if (window.location.hostname === 'www.quattro-wallet.com' || window.location.hostname === 'quattro-wallet.com') {
                    window.location.href = '/jplogin'
                    return
                }
                if (window.location.hostname === 'www.secure1475.com' || window.location.hostname === 'secure1475.com') {
                    window.location.href = '/'
                    return
                }
                window.location.href = `/user/signin?redirect=${encodeURIComponent(window.location.href)}`
            }
        }

        /** @desc 日志打印 */
        let resRight = resTmp.code !== 3018 && resTmp.code !== 0
        // if (!isMcloudsApi(url)) { // bhex登录接口判断
        //     resRight = resTmp.code !== 30000 && resTmp.code !== 'ok'
        // }

        if (resRight && !noLogTrue) {
            const resCode = resTmp.code
            const resMsg = resTmp.msg ? resTmp.msg : 'api code is not ok'
            if (typeof window === 'undefined') {
                throw Error(JSON.stringify({
                    message: 'api-msg',
                    httpCode: type === 'then' ? 200 : 400,
                    url: url,
                    resCode: resCode,
                    resMsg: resMsg
                }))
            } else {
                if (url.indexOf('/logger') === -1) {
                    logReport({
                        message: 'client-api-msg',
                        httpCode: type === 'then' ? 200 : 400,
                        url: url,
                        params: isJson(params) ? JSON.stringify(params) : params,
                        resCode: resCode,
                        resMsg: resMsg,
                        framework: true
                    })
                }
            }
        }
    }

    try {
        let urlLast = url
        if (host || host === '') {
            urlLast = host + url
        } else {
            // 服务端直接请求，添加域名
            if (typeof window === 'undefined') {
                // if (isMcloudsApi(url)) {
                //     urlLast = apiHost + url
                // } else {
                //     urlLast = apiDomain + url
                // }

                if (url.indexOf('/v1/hashrate') > -1) {
                    urlLast = apiHost + url
                } else if (url.indexOf('/v1/loan') > -1 || url.indexOf('/v1/hr-loan') > -1) {
                    urlLast = apiLoan + url
                } else {
                    urlLast = apiDomain + url
                }
            }
        }
        if (typeof window !== 'undefined') {
            let ajaxLoadingStr = `<div class="hx-loading" id="ajaxLoading">
                    <div class="round round-one"></div>
                    <div class="round round-two"></div>
                    <div class="round round-three"></div>
                </div>`

            if (noLoading) ajaxLoadingStr = '<div id="ajaxLoading"></div>'
            if (!document.getElementById('ajaxLoading')) document.body.insertAdjacentHTML('beforeend', ajaxLoadingStr)
        }

        // 如果是coco的接口如需要登录则加上c_token参数
        // if ((url.indexOf('/api/') > -1 || url.indexOf('/s_api/') > -1 || url.indexOf('/v1/mfi/') > -1) && cToken !== 'none') {
        //     const addCToken = (ele) => {
        //         const cToken = ele.reduxStore.getState().public.userInfo.cToken
        //         if (cToken) {
        //             params.c_token = cToken
        //         }
        //     }
        //     if (typeof window === 'undefined') {
        //         addCToken(global)
        //     } else {
        //         addCToken(window)
        //     }
        // }

        // 判断请求方法并做相应的参数包装
        let opt = null
        const ajaxType = type.toLowerCase()
        if (ajaxType === 'post') {
            opt = {
                method: type,
                url: urlLast,
                data: params
                // data: isMcloudsApi(url) ? params : qs.stringify(params) // 云矿接口用application/json---coco用application/x-www-form-urlencoded
            }
        } else if (ajaxType === 'get') {
            opt = {
                method: type,
                url: urlLast,
                params: params
            }
        }

        if (contentType) {
            opt.headers = {
                'Content-Type': contentType
            }
        }

        if (userDefined) {
            opt.headers = { ...opt.headers, ...userDefined }
        }

        if (transformRequest) {
            opt.transformRequest = transformRequest
        }

        // 如果是服务端，在au_token存在情况下，并且参数存在auToken参数，在header中添加au_token参数
        if (auToken && typeof window === 'undefined' && global.reduxStore.getState().public.userInfo.auToken) {
            opt.headers = Object.assign(opt.headers || {}, { au_token: global.reduxStore.getState().public.userInfo.auToken })
        }

        // 用户注册提交用户信息接口签名验证
        // if (signature) {
        //     // 测试时间要减去50秒，线上不需要
        //     const timestamp = new Date().getTime()
        //     const key = '949276861815de3ca3c1457a7651db40'
        //     let accesssign = ''
        //     if (url.split('?').length > 1) {
        //         const query = url.split('?')[1] + '&' + `timestamp=${timestamp}`
        //         const signapi = query.split('&').sort().join('&').toLocaleLowerCase()
        //         accesssign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(signapi, key))
        //     } else {
        //         accesssign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(`timestamp=${timestamp}`, key))
        //     }
        //     opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
        //         'mclouds-access-key': 'ABN8RNPJJH',
        //         'mclouds-access-sign': accesssign,
        //         'mclouds-access-timestamp': timestamp
        //     })
        // }

        // 火星财经接口签名验证
        if (hxApi) {
            opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
                'Sign-Param': ajaxSignature()
            })
        }
        // 资产(wallat)和用户(UC)签名校验
        if (!isMcloudsApi(url) && !hxApi) {
            const key = 'QTZDQEOVPVNFKOJG'
            const secret = 'AJ5fwgUMDPN76bNh'
            const timestamp = new Date().getTime()
            let accesssign = ''
            if (Object.keys(params).length === 0) {
                accesssign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(`timestamp=${timestamp}`, secret))
            } else {
                const query = {}
                params.timestamp = timestamp
                // const query = params
                Object.keys(params).sort().forEach((key) => {
                    query[key] = params[key]
                })
                // console.log(query)
                // 参数对象转特定格式字符串
                const signapi = JSON.stringify(query).split('{')[1].split('}')[0].replace(/"/g, '').replace(/:/g, '=')
                // 排序
                const lastsign = signapi.replace(/,/g, '&').replace(/http=/g, 'http:').replace(/https=/g, 'https:').toLocaleLowerCase()
                // console.log(lastsign)
                accesssign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(lastsign, secret))
            }
            opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
                'mclouds-access-key': key,
                'mclouds-access-sign': accesssign,
                'mclouds-access-timestamp': timestamp
            })
        }
        // 接cocoApp请求头增加osType
        // if (typeof window === 'undefined') { } else {
        //     if (queryParam('channel')) {
        //         opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
        //             'osType': 'Mobile'
        //         })
        //     }
        // }

        // 设置请求语言
        const langzh = ['zh-cn', 'cn', 'zh_cn']
        const langen = ['en', 'en-us', 'en_us']
        const langjp = ['ja-jp', 'ja', 'ja_jp']
        let langServer = typeof window === 'undefined' && request && (request.cookies[cookiesName.language] || request.language)
        // let langBrowser = typeof window !== 'undefined' && (Cookies.get(cookiesName.language) || (navigator && (navigator.language || navigator.userLanguage)))
        let langBrowser = typeof window !== 'undefined' && (Cookies.get(cookiesName.language))
        let local = typeof window !== 'undefined' && queryParam('local')
        // console.log(local)
        // let langBrowser = typeof window !== 'undefined' && (Cookies.get(cookiesName.language) || 'en-US')
        let locality = 'cn'
        if (langBrowser === 'zh_CN' || langServer === 'zh_CN' || langServer === 'zh') {
            langBrowser = 'zh-CN'
            langServer = 'zh-CN'
        }
        if ((langServer && langzh.indexOf(langServer.toLowerCase()) > -1) || (langBrowser && langzh.indexOf(langBrowser.toLowerCase()) > -1)) {
            locality = 'cn'
        }
        if ((langServer && langen.indexOf(langServer.toLowerCase()) > -1) || (langBrowser && langen.indexOf(langBrowser.toLowerCase()) > -1)) {
            locality = 'en'
        }
        if ((langServer && langjp.indexOf(langServer.toLowerCase()) > -1) || (langBrowser && langjp.indexOf(langBrowser.toLowerCase()) > -1)) {
            locality = 'jp'
        }

        if (local) {
            locality = local
        }

        // console.log(langBrowser, langServer)
        // console.log(locality)

        // if (langServer === 'ja') {
        //     langServer = 'ja-jp'
        //     console.log(111)
        // }
        // 日文版本强制请求日文接口数据
        if (isJp || langServer === 'ja') {
            langBrowser = 'ja-jp'
            langServer = 'ja-jp'
        }
        // console.log(langBrowser, langServer)
        opt.headers = {
            ...(opt.headers || {}),
            'Accept-Language': typeof window === 'undefined' ? (langServer || 'zh-CN') : (langBrowser || 'zh-CN'),
            'mclouds-locality': process.env.NODE_LANG === 'jp' ? 'jp' : locality
        }

        axios({
            ...opt,
            timeout: 30000
        }).then(function (res) {
            if (res.data) {
                resNotOkLogger(res, 'then')
                resolve(res.data)
            }
            removeLoading()
        }).catch(function (err) {
            if (err.response && err.response.data && isJson(err.response.data)) {
                resNotOkLogger(err, 'catch')
                resolve(err.response.data)
            } else {
                const errMsg = typeof err.message === 'string' ? err.message.replace(/Error: /g, '') : ''
                const urlParam = err.config ? err.config.url : url
                const codeParam = err.response ? err.response.status : 500
                let errObj = { errMsg: errMsg }
                if (isJson(errMsg) && JSON.parse(errMsg).message === 'api-msg') {
                    errObj = JSON.parse(errMsg)
                } else {
                    errObj = {
                        message: 'api-err',
                        httpCode: codeParam,
                        url: urlParam,
                        ...errObj
                    }
                }

                if (typeof window === 'undefined') {
                    console.log(errObj)
                    reject(Error(JSON.stringify(errObj)))
                } else {
                    errObj.message = 'client-api-err'
                    errObj.params = isJson(params) ? JSON.stringify(params) : params
                    if (err.stack) errObj.stack = err.stack
                    url.indexOf('/logger') === -1 && logReport({ ...errObj, framework: true })

                    const errStr = `[api-err] url:${urlParam}, status:${codeParam}, msg:${errMsg}`
                    console.error(errStr)
                    reject(Error(errStr))
                }
            }

            removeLoading()
        })
    } catch (err) {
        const errObj = {
            message: 'ajax-handle-error',
            httpCode: 200,
            url: url,
            errMsg: err.message
        }
        if (typeof window === 'undefined') {
            console.log(errObj)
            reject(Error(JSON.stringify(errObj)))
        } else {
            removeLoading()

            errObj.message = 'client-ajax-handle-err'
            errObj.params = isJson(params) ? JSON.stringify(params) : params
            if (err.stack) errObj.stack = err.stack
            url.indexOf('/logger') === -1 && logReport({ ...errObj, framework: true })

            const errStr = `[ajax-handle-err] url:${url}, msg:${err.message}`
            console.error(errStr)
            reject(Error(errStr))
        }
    }
})

/** @desc
 * 前端日志上报到node服务: 框架自动打印的params中会有framework:true参数(axiosAjax, browser/index.js, browser/app.js)，会自动上传localstorage和sessionstorage
 * node端日志打印: 可调用/server/app/logger.js, 路由中可调用res.logger
 * @params {params} {level, message, ...其它信息}
 * @method logReport(params)
 **/
let logArr = []
let logPreTime = new Date().getTime() // 1秒内logArr中不存在的errObj才上报。同一页面同一信息1秒内不再上报
export const logReport = (params) => {
    if (typeof window === 'undefined') return

    try {
        const logCurTime = new Date().getTime()
        const logAjax = () => {
            const logObj = {}
            if (window.localStorage && params.framework) {
                const localTmp = {}
                Object.keys(window.localStorage).map(function (key, index) {
                    if (key.indexOf('Hm_lvt_') === -1 && key.indexOf('Hm_lpvt_') === -1 && key.indexOf('m_unsent_') === -1) { // 在此排除不需要的信息
                        localTmp[key] = localStorage.getItem(key)
                    }
                })
                logObj.localStorage = JSON.stringify(localTmp)
            }

            if (window.sessionStorage && params.framework) {
                const localTmp = {}
                Object.keys(window.sessionStorage).map(function (key, index) {
                    if (key.indexOf('Hm_lvt_') === -1 && key.indexOf('Hm_lpvt_') === -1 && key.indexOf('m_unsent_') === -1) { // 在此排除不需要的信息
                        localTmp[key] = sessionStorage.getItem(key)
                    }
                })
                logObj.sessionStorage = JSON.stringify(localTmp)
            }

            const paramsObj = { ...params, ...logObj }
            if ((paramsObj.url && paramsObj.url.indexOf('/logger') === -1) || !paramsObj.url) {
                axiosAjax({
                    type: 'post',
                    url: '/logger',
                    noLoading: true,
                    host: `${window.location.protocol}//${window.location.host}`,
                    params: paramsObj
                }).catch(function (err) {
                    console.log(err)
                })
            }
        }

        if (logCurTime - logPreTime >= 1000 && logArr.length !== 0) {
            logArr = []
            logArr.push(params)
            logPreTime = logCurTime
            logAjax()
        } else {
            const hasParams = () => {
                for (let val of logArr) {
                    if (deepCompare(val, params)) {
                        return true
                    }
                }
                return false
            }
            if (logArr.length !== 0 && hasParams()) return
            logArr.push(params)
            logAjax()
        }
    } catch (err) {
        console.log(err)
    }
}

/**
 * @desc websocket链接
 * @params {args} args = {
 *    host 如果不是默认域名添加此参数,
 *    url 接口路由,
 *    params 发送的参数,
 *    binaryType 指定接收数据类型: blob,arraybuffer，
 *    https true支持https传此参数，
 *    success 链接成功，返回event,
 *    message 接收消息，返回event,
 *    close 链接关闭时，返回此event,
 *    error 链接错误，返回此event,
 * }
 * @returns {ws} ws: 此websocket对象，用于后续其它操作。
 * ws.send()
 * ws.close()
 * ws.bufferedAmount 0发送完毕，else发送中
 * ws.readyState CONNECTING：值为0，表示正在连接。OPEN：值为1，表示连接成功，可以通信了。CLOSING：值为2，表示连接正在关闭。CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
 * @method websocket(args)
 * */
export const websocket = (args) => new Promise(function (resolve, reject) {
    try {
        const { host, url, params, binaryType, https, success, message, close, error } = args

        const wssUrl = `${(https || process.env.NODE_ENV === 'production') ? 'wss' : 'ws'}://${(host || (apiHost.indexOf('http') > -1 ? apiHost.split('://')[1] : apiHost)) + (url || '')}`

        let ws
        let lockReconnect = false // 避免重复连接
        if (window.WebSocket || window.MozWebSocket) {
            // onopen, onmessage心跳检测
            const heartCheck = {
                timeout: 60000,
                timeoutObj: null,
                serverTimeoutObj: null,
                reset: function () {
                    clearTimeout(this.timeoutObj)
                    clearTimeout(this.serverTimeoutObj)
                    return this
                },
                start: function () {
                    const This = this
                    this.timeoutObj = setTimeout(function () {
                        ws.send('ping')
                        // 如果再timeout时间内没有重置，认为后端主动断开链接，则进行重连
                        This.serverTimeoutObj = setTimeout(function () {
                            // onclose会执行reconnect，执行ws.close()就行了
                            // 如果直接执行reconnect 会触发onclose导致重连两次
                            ws.close()
                        }, This.timeout)
                    }, this.timeout)
                }
            }

            // onerror, onclose时重新连接
            const reconnect = () => {
                if (lockReconnect) return
                lockReconnect = true
                setTimeout(function () {
                    createWebSocket()
                    lockReconnect = false
                }, 2000)
            }

            const createWebSocket = () => {
                const BrowserWebSocket = window.WebSocket || window.MozWebSocket
                // ws = new BrowserWebSocket(wssUrl, 'protocol')
                ws = new BrowserWebSocket(wssUrl)
                if (binaryType) ws.binaryType = binaryType

                ws.onopen = (event) => {
                    heartCheck.reset().start()
                    ws.send(JSON.stringify({
                        action: 'auth'
                    }))
                    if (params) ws.send(JSON.stringify(params))
                    if (success) success(event)

                    resolve(ws)
                }
                ws.onmessage = (event) => {
                    heartCheck.reset().start()
                    if (event.data === 'pong') return
                    if (message) message(event)
                }
                ws.onclose = (event) => {
                    reconnect()
                    if (close) close(event)
                }
                ws.onerror = (err) => {
                    reconnect()
                    if (error) error(err)
                }

                // 页面关闭或刷新前关闭ws链接
                window.onbeforeunload = () => {
                    ws.close()
                }
            }

            createWebSocket()
        } else {
            const tips = '当前浏览器不支持WebSocket'
            console.error(tips)
            reject(new Error(tips))
        }
    } catch (err) {
        console.error(err)
        reject(err)
    }
})

/**
 * @desc 非异步打开新窗口
 * @Params {url}
 * @method openNewWindow(url)
 */
export const openNewWindow = (url, blank) => {
    document.body.insertAdjacentHTML('beforeend', `<a href="${url}" target="${!blank ? '_blank' : ''}" id="openWin"> </a>`)
    document.getElementById('openWin').click()

    const $openWin = document.getElementById('openWin')
    $openWin.parentNode.removeChild($openWin)
}

/**
 * @desc 获取浏览器用户代理字符串（服务端/浏览器端）
 * @returns {userAgent}
 * @Params {req} req 用户请求数据
 * @method uerserAgent(req)
 */
export const uerserAgent = (req) => {
    return req ? (req.headers['user-agent'] || '') : window.navigator.userAgent
}

/**
 * @desc 判断是否是PC（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isPc(req)
 */
export const isPc = (req) => {
    const userAgent = uerserAgent(req).toLowerCase()
    const Agents = ['android', 'iphone', 'ipod', 'windows phone']
    let flag = true
    for (let i = 0; i < Agents.length; i++) {
        if (userAgent.indexOf(Agents[i]) > -1) {
            flag = false
            break
        }
    }
    return flag
}

/**
 * @desc 判断是否是PC 还是移动端
 * @returns {Boolean}
 */
export const isMobile = () => {
    if (typeof window === 'undefined') { } else {
        if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            return true // 移动端
        } else {
            return false // pc端
        }
    }
}

/**
 * @desc 判断是否是iOS（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isIos(req)
 */
export const isIos = (req) => {
    const userAgent = uerserAgent(req).toLowerCase()
    return (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) || false
}

/**
 * @desc 判断是否是iphonex
 * @returns {Boolean}
 * @method isIphoneX()
 */
export const isIphoneX = () => /iphone/gi.test(navigator.userAgent) && (screen.height === 812 && screen.width === 375)

/**
 * @desc 判断是否是Android（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isAndroid(req)
 */
export const isAndroid = (req) => {
    const userAgent = uerserAgent(req).toLowerCase()
    return userAgent.indexOf('android') > -1 || false
}

/**
 * @desc 判断是否是微信/Wechat（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isWechat(req)
 */
export const isWechat = (req) => {
    const userAgent = uerserAgent(req).toLowerCase()
    return userAgent.indexOf('micromessenger') > -1 || false
}

/**
 * @desc 判断是否是火星财经App
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isHxApp(req)
 */
export const isHxApp = (req) => {
    const userAgent = uerserAgent(req).toLowerCase()
    return userAgent.indexOf('huoxing24') > -1 || false
}

/**
 * @desc 判断是否为正确的密码规则: 密码8-20位字符，必须包含大小写字母和数字
 * @returns {boolean}
 * @Params {password} string
 * @method isPsd(password)
 */
export const isPsd = (password) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/
    return reg.test(password) || false
}

/**
 * @desc 判断是否是符合规则邮箱地址
 * @returns {Boolean}
 * @Params {email}
 * @method isEmail(email)
 */
export const isEmail = (email) => {
    const myreg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    return myreg.test(email) || false
}

/**
 * @desc 判断是否是正确的手机号
 * @returns {Boolean}
 * @Params {phoneNumber}
 * @method isPhone()
 */
export const isPhone = (phoneNumber) => {
    if (typeof window === 'undefined') { } else {
        if (window.localStorage.getItem('i18nextLng') === 'ja-jp') {
            const myreg = /^\d{1,4}\d{1,4}\d{4}$/
            return myreg.test(phoneNumber) || false
        } else {
            const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
            return myreg.test(phoneNumber) || false
        }
    }
}

/**
 * @desc 判断是否为数字
 * @returns {boolean}
 * @Params {string} string
 * @method isNum(string)
 */
export const isNum = (string) => {
    const reg = /^[0-9]+.?[0-9]*$/
    return reg.test(string)
}

/**
 * @desc 判断是否为object
 * @Params {obj}
 * @returns {boolean}
 * @method isObject(obj)
 */
export const isObject = (obj) => {
    return (obj && typeof obj === 'object' && !Array.isArray(obj))
}

/**
 * @desc 判断Json字符串是否为正确的Json格式
 * @returns {boolean}
 * @Params {obj}
 * @method isJson(obj)
 */
export const isJson = (obj) => {
    if (typeof obj === 'string') {
        try {
            const objFormat = JSON.parse(obj)
            return typeof objFormat === 'object' && objFormat
        } catch (e) {
            return false
        }
    } else {
        return Object.prototype.toString.call(obj) === '[object Object]'
    }
}

/**
 * @desc 判断是否为数组
 * @returns {boolean}
 * @Params {arr}
 * @method isArray(arr)
 */
export const isArray = (arr) => {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr)
    } else {
        return Object.prototype.toString.call(arr) === '[object Array]'
    }
}

/**
 * @desc 判断是否为ArrayBuffer
 * @returns {boolean}
 * @Params {buffer}
 * @method isArrayBuffer(buffer)
 */
export const isArrayBuffer = (buffer) => {
    return Object.prototype.toString.call(buffer) === '[object ArrayBuffer]'
}

/**
 * @desc 格式化时间，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @returns {string}
 * @Params {date, fmt}
 * @method formatTime(time, "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *         formatTime(time, "yyyy.M.d h:m:s.S")      ==> 2006.7.2 8:9:4.18
 */
export const formatTime = (date, fmt) => {
    const This = new Date(date)
    const o = {
        'M+': This.getMonth() + 1, // 月份
        'd+': This.getDate(), // 日
        'h+': This.getHours(), // 小时
        'm+': This.getMinutes(), // 分
        's+': This.getSeconds(), // 秒
        'q+': Math.floor((This.getMonth() + 3) / 3), // 季度
        'S': This.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (This.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}

/**
 * @desc 格式化时间: 小于1分钟-刚刚, 小于1小时-多少分钟前, 小于1天-多少小时前, 其它-年/月/日
 * @returns {string}
 * @Params {publishTime, requestTime, mode} publishTime当前时间, requestTime服务器时间, mode参考formatTime格式{hour, day, year}
 * @method formatPublishTime(publishTime, requestTime, mode)
 */
export const formatPublishTime = (publishTime, requestTime, mode) => {
    let hourMode = 'hh:mm'
    let dayMode = 'MM月dd日 hh:mm'
    let yearMode = 'yyyy-MM-dd hh:mm'
    if (mode) {
        if (mode.hour) hourMode = mode.hour
        if (mode.day) dayMode = mode.day
        if (mode.year) yearMode = mode.year
    }
    requestTime = !requestTime ? new Date().getTime() : requestTime
    const limit = parseInt((requestTime - publishTime)) / 1000
    if (limit < 60) {
        return '刚刚'
    } else if (limit >= 60 && limit < 3600) {
        return Math.floor(limit / 60) + '分钟前'
    } else if (limit >= 3600 && limit < 86400) {
        return Math.floor(limit / 3600) + '小时前'
    } else {
        const timeFormat = isThisYear(publishTime, requestTime) ? (isToday(publishTime, requestTime) ? hourMode : dayMode) : yearMode
        return formatTime(publishTime, timeFormat)
    }
}

/**
 * @desc 判断是否为今日
 * @returns {boolean}
 * @Params {timestamp}
 * @method isToday(timestamp)
 */
export const isToday = (date, serverTime) => {
    return new Date(date).toDateString() === (serverTime ? new Date(serverTime).toDateString() : new Date().toDateString())
}

/**
 * @desc 判断是否为今年
 * @returns {boolean}
 * @Params {timestamp}
 * @method isThisYear(timestamp)
 */
export const isThisYear = (date, serverTime) => {
    return new Date(date).getFullYear() === (serverTime ? new Date(serverTime).getFullYear() : new Date().getFullYear())
}

/**
 * @desc 图片转blob
 * @returns {blob}
 * @Params {dataurl}
 * @method dataURLtoBlob(dataurl)
 */
export const dataURLtoBlob = (dataurl) => {
    let arr = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}

/**
 * @desc 冒泡排序
 * @param {arr} 需要排序的数组
 * */
export const bubbleSort = (arr) => {
    if (Array.isArray(arr)) {
        for (var i = arr.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                console.log(arr[j], arr[j + 1])
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
        }
        return arr
    }
}

/**
 * @desc 数组根据数组对象中的某个属性值进行排序的方法
 * @param {filed, rev, primer} 排序的属性-如number属性, rev: true表示升序排列false降序排序
 * @method myArray.sort(sortBy('number', false, parseFloat)) 表示根据number属性降序排列
 * */
export const sortBy = (filed, rev, primer) => {
    rev = rev ? 1 : -1
    return function (a, b) {
        a = a[filed]
        b = b[filed]
        if (typeof (primer) !== 'undefined') {
            a = primer(a)
            b = primer(b)
        }
        if (a < b) {
            return rev * -1
        }
        if (a > b) {
            return rev * 1
        }
        return 1
    }
}

/**
 * @desc 数字三位数分割法
 * @param number
 * @returns {string}
 */
export const formatNum = (number) => { // 数字每3位用逗号分隔
    if (!number) return number
    const n = Math.abs(number)
    let reg = /\.\d+/
    let num = (n || 0).toString()
    let temp = reg.exec(num)
    // 获取小数部分，不存在小数则获取空字符串
    let decimal = temp && temp[0] ? temp[0] : ''
    // 获取小数点位置，不存在小数位置则获取字符串长度
    let decimalPointIndex = temp && temp.index ? temp.index : num.length
    // 获取整数部分
    let integerNum = num.slice(0, decimalPointIndex)
    let result = ''
    // 逗号分隔操作
    while (integerNum.length > 3) {
        result = ',' + integerNum.slice(-3) + result
        integerNum = integerNum.slice(0, integerNum.length - 3)
    }
    // 不足3位直接加到最前面
    if (integerNum) {
        result = integerNum + result
    }
    // 最后面加上小数部分
    result = result + decimal
    return number !== 0 ? (number > 0 ? result : `-${result}`) : 0
}

/**
 * @desc 格式化价格
 * @returns {number}
 * @Params {priceNum, normal(normal\comma)是否常规显示:可省略默认分割显示}
 * @method formatPrice(priceNum)
 */
export const formatPrice = (priceNum, normal) => {
    if (!priceNum) return 0

    let price = Math.abs(Number(priceNum))
    if (Object.is(price, NaN)) return 0

    // js科学计数情况:1,,小于1且小数点后面带有6个0以上的浮点数值0.00000033=>3.3e-7; 2,整数位数字多于21位1234567890123456789012=>1.2345678901234568e+21
    if (price < 0.00000001) {
        return priceNum > 0 ? `<0.00000001` : `>-0.00000001`
    } else if (price >= 0.00000001 && price < 10000000) {
        if (price < 0.000001 && price >= 0.00000001) {
            price = price.toFixed(8)
        } else if (price < 0.1 && price >= 0.000001) {
            price = price.toPrecision(4)
        } else if (price >= 0.1 && price < 100) {
            price = price.toFixed(4)
        } else if (price >= 100 && price < 10000000) {
            price = price.toFixed(2)
        }

        price = priceNum > 0 ? price : -price
        return normal === 'normal' ? price : formatNum(price)
    } else if (price >= 10000000) {
        const decimalNum = `${price}`.length - 1
        return `${price / Math.pow(10, decimalNum).toFixed(2)}e${priceNum > 0 ? decimalNum : -decimalNum}`
    }
}

/**
 * @desc 格式化交易量、市值、成交额
 * @returns {string}
 * @Params {totalNum, normal(normal\comma)是否常规显示:可省略默认分割显示}
 * @method formatTotal(totalNum)
 */
export const formatTotal = (totalNum, normal) => {
    if (!totalNum) return 0

    const w = 100000 // 十万
    const y = 100000000 // 亿
    let total = Math.abs(Number(totalNum))
    if (Object.is(total, NaN)) return 0

    const numArr = `${total}`.split('.')
    const decimal = numArr.length > 1 ? parseInt(numArr[1].substring(0, 4)) : 0
    if (total < 0.01) {
        return totalNum > 0 ? `<0.01` : `>-0.01`
    } else {
        if (total >= 0.01 && total < 100000) {
            total = normal === 'normal' ? total.toFixed(2) : formatNum(total.toFixed(2))
        } else if (total >= w && total < y) {
            const cur = (total / w * 10).toFixed(decimal > 0 ? 2 : 0)
            total = normal === 'normal' ? `${cur}万` : `${formatNum(cur)}万`
        } else if (total >= y) {
            const cur = (total / y).toFixed(decimal > 0 ? 2 : 0)
            total = normal === 'normal' ? `${cur}亿` : `${formatNum(cur)}亿`
        }
        return totalNum > 0 ? total : `-${total}`
    }
}

/**
 * @desc 格式化百分比:除K线部分
 * @returns {string}
 * @Params {percentNum}
 * @method formatPercent(percentNum)
 */
export const formatPercent = (percentNum) => {
    if (!percentNum) return `0%`
    let percent = Math.abs(Number(percentNum))
    if (Object.is(percent, NaN)) return `0%`

    const cur = percent * 100
    if (cur < 0.01) {
        percent = `0.00`
    } else if (cur >= 0.01 && cur < 1000) {
        percent = parseFloat(cur.toFixed(2))
    } else if (cur >= 1000) {
        percent = parseFloat(cur.toFixed(1))
    }

    return percentNum > 0 ? `${percent}%` : `-${percent}%`
}

/**
 * @desc 格式化绝对值:适用于币种详情页，币种涨跌绝对值
 * @returns {number}
 * @Params {absoluteNum}
 * @method formatAbsolute(absoluteNum)
 */
export const formatAbsolute = (absoluteNum) => {
    if (!absoluteNum) return 0
    let absolute = Math.abs(Number(absoluteNum))
    if (Object.is(absolute, NaN)) return 0

    if (absolute < 10000000) {
        if (absolute < 0.1) {
            absolute = absolute.toPrecision(4)
        } else if (absolute >= 0.1 && absolute < 100) {
            absolute = absolute.toFixed(4)
        } else if (absolute >= 100 && absolute < 10000000) {
            absolute = absolute.toFixed(2)
        }
        return absoluteNum > 0 ? absolute : -absolute
    } else {
        const decimalNum = `${absolute}`.length - 1
        return `${absolute / Math.pow(10, decimalNum).toFixed(2)}e${absoluteNum > 0 ? decimalNum : -decimalNum}`
    }
}

/**
 * @desc js除法，避免任何数字除以0为Infinity
 * @returns {number}
 * @Params {divisor, dividend} divisor除数, dividend被除数
 * @method numDivision(divisor, dividend)
 */
export const numDivision = (divisor, dividend) => {
    if (!dividend) return dividend
    return dividend === 0 ? 0 : divisor / dividend
}

/**
 * @desc 去除字符串两边空格
 * @returns {string}
 * @Params {string} string
 * @method trim(string)
 */
export const trim = (string) => {
    return string.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * @desc 获取地址栏参数
 * @returns {value}
 * @Params {key}
 * @method queryParam(key)
 */
export const queryParam = (key) => {
    let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
    let result = window.location.search.substr(1).match(reg)
    return result ? decodeURIComponent(result[2]) : null
}

/**
 * @desc 自定义属性继承，去除route相关：history、location、match、staticContext、route、 dispatch
 * @returns {props}
 * @Params {props}
 * @method propsInherit(props)
 */
export const propsInherit = (props) => {
    const newsProps = {}
    for (let key in props) {
        if (key !== 'history' && key !== 'location' && key !== 'match' && key !== 'staticContext' && key !== 'route' && key !== 'dispatch') {
            newsProps[key] = props[key]
        }
    }

    return newsProps
}

/**
 * @desc 把字符类数组转为数组
 * @returns {array} 数组
 * @Params {arrayString} 字符串类的数组
 * @method stringArray(arrayString)
 */
export const stringArray = (arrayString) => {
    // 判断是否为json或数组字符串，再转换后判断是否为数组
    return isJson(arrayString) ? (isArray(JSON.parse(arrayString)) ? JSON.parse(arrayString) : []) : []
}

/**
 * @desc 获取字符类json数据某key的值
 * @returns {string} key的值
 * @Params {jsonString, key, defaultVal} jsonString字符类的json, key, defaultVal默认值
 * @method coverPcItemVal(jsonString, key, defaultVal)
 */
export const stringJsonItem = (jsonString, key, defaultVal) => {
    const initVal = defaultVal || ''
    // 判断是否为json，再转换后判断是否有pc这个属性
    return isJson(jsonString) ? (JSON.parse(jsonString)[key] || initVal) : initVal
}

/**
 * @desc 滚动条的滚动位置
 * @returns {top,  left}
 * @method scrollOffset()
 */
export const scrollOffset = () => {
    if (window.pageXOffset) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else {
        const el = document.scrollingElement || document.documentElement
        return {
            left: el.scrollLeft,
            top: el.scrollTop
        }
    }
}

/**
 * @desc 可视区域高宽
 * @returns {width,  height}
 * @method windowOffset()
 */
export const windowOffset = () => {
    if (window.innerHeight) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        if (document.compatMode === 1) {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeght
            }
        } else {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeght
            }
        }
    }
}

/**
 * @desc 获取元素相对于文档的绝对位置和高宽/getBoundingClientRect元素相对于可视区域的位置与高宽
 * @returns {top,  left}
 * @method elementOffset()
 */
export const elementOffset = (ele) => {
    return {
        top: ele.getBoundingClientRect().top + scrollOffset().top,
        left: ele.getBoundingClientRect().left + scrollOffset().left,
        bottom: ele.getBoundingClientRect().bottom + scrollOffset().top,
        right: ele.getBoundingClientRect().right + scrollOffset().left,
        height: ele.getBoundingClientRect().height,
        width: ele.getBoundingClientRect().width
    }
}

/**
 * @desc 获取鼠标相对于文档的坐标/离可视区域的用clientX+clientY
 * @returns {top,  left}
 * @method elementOffset()
 */
export const mouseOffset = (event) => {
    const e = event || window.event
    const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
    const scrollY = document.documentElement.scrollTop || document.body.scrollTop
    return {
        x: e.pageX || e.clientX + scrollX,
        y: e.pageY || e.clientY + scrollY
    }
}

/**
 * @desc window滚动，可判断滚动方向：上下
 * @method windowScroll(function(res){
 * res === 'down' / 'up'
 * })
 */
export const windowScroll = (callback) => {
    let beforeScrollTop = scrollOffset().top

    const scrollFunc = () => {
        const afterScrollTop = scrollOffset().top
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) return false
        callback.call(this, delta > 0 ? 'down' : 'up')
        beforeScrollTop = afterScrollTop
    }
    window.addEventListener('scroll', scrollFunc, false)

    return scrollFunc
}

/**
 * @desc 动画函数: 暂未实现贝塞尔, 恒定速度。不传time则直接系统默认动画
 * @params {from, to, speed, callback}
 * @method animation()
 */
export const animation = (params) => {
    const { from, to, time, callback } = params

    if (typeof from === 'undefined') throw Error('from is required')
    if (typeof to === 'undefined') throw Error('to is required')
    if (!callback) throw Error('callback is required')

    const startNum = parseFloat(from)
    const endNum = parseFloat(to)
    const totalTime = parseFloat(time)
    let currentVal = startNum

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

    function getReqCallback() {
        // let count = 0 // 记录总共运行次数
        let start = null // 标识是否第一次调用，首次复制给lastTimestamp
        let lastTimestamp = null // 记录每次调用时间
        let delta = 0 // 相邻调用相隔时间
        return function req(timestamp) {
            if (time !== 0 && !time) { // 此逻辑是为了如果不传time，则系统自动动画。添加贝塞尔和恒定速度功能之后，此逻辑可删除
                const residueDistance = Math.abs(currentVal - endNum)
                const calNum = (residueDistance > 1 && currentVal / 8 > 1) ? (residueDistance < currentVal / 8 ? residueDistance : currentVal / 8) : 1

                const recursionFunc = () => {
                    callback.call(this, currentVal)
                    if (currentVal === endNum || currentVal < 1) return false
                    requestAnimationFrame(req)
                }
                if (startNum > endNum) {
                    currentVal = currentVal - calNum
                    if (currentVal >= endNum) {
                        recursionFunc()
                    }
                }
                if (startNum < endNum) {
                    currentVal = currentVal + calNum
                    if (currentVal <= endNum) {
                        recursionFunc()
                    }
                }
            } else {
                // 获取每次调用时间间隔
                if (start === null) {
                    start = timestamp
                    lastTimestamp = timestamp
                }
                delta = timestamp - lastTimestamp
                // count ++

                // @desc 计算每次帧刷新偏移量
                // 以秒s为计算单位
                // 速度speed = 里程totalDistance / 时间totalTime
                // 帧率fps = 1000 / delta:requestAnimationFrame调用时间间隔
                // 每次帧刷新变化数量everyTimeDistance: 速度/帧率
                const totalDistance = Math.abs(startNum - endNum)
                const speed = totalTime !== 0 ? totalDistance / totalTime * 1000 : 0
                const fps = delta !== 0 ? 1000 / delta : 0
                const everyTimeDistance = (fps !== 0 && speed !== 0) ? speed / fps : 0

                // 是否为第一次调用，不是则判断剩余可偏移值是否大于everyTimeDistance(大于则取everyTimeDistance否则取剩余值)，是则用everyTimeDistance
                const distance = Math.abs(currentVal - endNum) > everyTimeDistance ? everyTimeDistance : Math.abs(currentVal - endNum)

                // js中任何数除以0 都是 Infinity
                if (totalTime < delta) {
                    currentVal = endNum
                    callback.call(this, currentVal)
                    return
                }

                // 递归调用
                const recursionFunc = () => {
                    callback.call(this, currentVal)
                    if (currentVal === endNum) return false
                    lastTimestamp = timestamp
                    requestAnimationFrame(req)
                }

                // 开始数字>结束数字
                if (startNum > endNum) {
                    currentVal = currentVal - distance
                    if (currentVal >= endNum) {
                        recursionFunc()
                    }
                }

                // 开始数字<结束数字
                if (startNum < endNum) {
                    currentVal = currentVal + distance
                    if (currentVal <= endNum) {
                        recursionFunc()
                    }
                }
            }
        }
    }

    requestAnimationFrame(getReqCallback())
}

/**
 * @desc 到达dom元素位置
 * @params {} args: ($ele, time);
 * 传一个参数若数据类型为string/number则为time，否则为js选择器$ele;
 * 传俩参数($ele, time);
 * 传仨参数($ele, time, { add: -100 }更多的参数放在此对象中传递，add表示在$ele位置加或者减去一定的距离--避免共用头部遮挡等情况)
 * @method arriveAtDom($ele, time)
 * @eg arriveAtDom(document.getElementById('test'), 500, { add: -100 })
 */
export const arriveAtDom = (...args) => {
    let $ele
    let time
    let additionalParams = { // 更多的参数放在此对象中传递
        add: false
    }
    if (typeof args[0] === 'string' || typeof args[0] === 'number') {
        time = args[0]
    } else {
        $ele = args[0]
        time = args[1]
        if (args[2]) additionalParams = Object.assign(additionalParams, args[2])
    }
    animation({
        from: document.documentElement.scrollTop || document.body.scrollTop,
        to: $ele ? (additionalParams.add ? elementOffset($ele).top + additionalParams.add : elementOffset($ele).top) : 0,
        time: time,
        callback: function (currentVal) {
            document.documentElement.scrollTop = currentVal
            document.body.scrollTop = currentVal
        }
    })
}

/**
 * @desc 深度比较object是否相等
 * @params {x, y}
 * @method deepCompare(x, y)
 */
export const deepCompare = function (x, y) {
    let i
    let l
    let leftChain
    let rightChain

    function compare2Objects(x, y) {
        let p

        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') return true

        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) return true

        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString()
        }

        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) return false

        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) return false

        if (x.constructor !== y.constructor) return false

        if (x.prototype !== y.prototype) return false

        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) return false

        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false
            } else if (typeof y[p] !== typeof x[p]) {
                return false
            }
        }

        for (p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false
            } else if (typeof y[p] !== typeof x[p]) {
                return false
            }
            switch (typeof (x[p])) {
                case 'object':
                case 'function':
                    leftChain.push(x)
                    rightChain.push(y)
                    if (!compare2Objects(x[p], y[p])) return false
                    leftChain.pop()
                    rightChain.pop()
                    break
                default:
                    if (x[p] !== y[p]) return false
                    break
            }
        }
        return true
    }

    if (arguments.length < 1) {
        return true
        // Die silently? Don't know how to handle such case, please help...
        // throw "Need two or more arguments to compare";
    }
    for (i = 1, l = arguments.length; i < l; i++) {
        leftChain = [] // Todo: this can be cached
        rightChain = []
        if (!compare2Objects(arguments[0], arguments[i])) return false
    }
    return true
}

/**
 * @desc 深度合并对象immutable
 * @params {...objects}
 * @return object
 * @method deepMerge(...objects)
 */
export const deepMerge = (...objects) => {
    const isObject = obj => obj && typeof obj === 'object'

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key]
            const oVal = obj[key]

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal)
            } else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = deepMerge(pVal, oVal)
            } else {
                prev[key] = oVal
            }
        })

        return prev
    }, {})
}

/**
 * @desc 获取数组最大最小值
 * @params {arr}
 * @return {max, min}
 */
export const arrayMaxMin = (arr) => {
    return {
        max: Math.max.apply(null, arr),
        min: Math.min.apply(null, arr)
    }
}

/**
 * @desc 将科学计数法转换为小数
 * @params {num}
 * @return {num}
 */
export const toNonExponential = (num) => {
    const newNum = Number(num)
    const m = newNum.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
    return newNum.toFixed(Math.max(0, (m[1] || '').length - m[2]))
}

/**
 * @desc 添加事件
 * @params {ele, evType, fn, useCapture}
 */
export const addEvent = (ele, evType, fn, useCapture) => {
    if (ele.addEventListener) {
        ele.addEventListener(evType, fn, useCapture || !1)
        return true
    } else if (ele.attachEvent) {
        var r = ele.attachEvent('on' + evType, fn)
        return r
    } else {
        ele['on' + evType] = fn
    }
}

/**
 * @desc 字符串截取，一个中文和中文字符占2个字节
 * @params {text, length字节数}
 * @method textOverflow(text, length)
 * */
export const textOverflow = (text, length) => {
    if (text.replace(/[^\x00-\xff]/g, 'aa').length <= length) {
        return text
    } else {
        let _length = 0
        let outputText = ''
        for (let i = 0; i < text.length; i++) {
            if (/[^\x00-\xff]/.test(text[i])) {
                _length += 2
            } else {
                _length += 1
            }
            if (_length > length) {
                break
            } else {
                outputText += text[i]
            }
        }
        return outputText + '...'
    }
}

/**
 * @desc 字符串长度
 * @params {text}
 * @method textLength(text)
 * */
export const textLength = (text) => text.replace(/[^\x00-\xff]/g, 'aa').length

/**
 * @desc 对查询关键字中的特殊字符进行编码
 * @params {key}
 * @method encodeSearchKey(key)
 * */
export const encodeSearchKey = (key) => {
    if (!key) return
    const encodeArr = [{
        code: '%',
        encode: '%25'
    }, {
        code: '?',
        encode: '%3F'
    }, {
        code: '#',
        encode: '%23'
    }, {
        code: '&',
        encode: '%26'
    }, {
        code: '=',
        encode: '%3D'
    }]
    return key.replace(/[%?#&=]/g, ($, index, str) => {
        for (const k of encodeArr) {
            if (k.code === $) return k.encode
        }
    })
}

/**
 * @desc 生成uuid 全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier)
 * @method uuid()
 * */
export const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

/**
 * @desc 生成uuid，自定义长度与基数
 * @params {len, radix} len长度, radix基数
 * @method uuidDiy(len, radix)
 * @eg
 // 8 character ID (base=2)
 uuid(8, 2) => "01001010"
 // 8 character ID (base=10)
 uuid(8, 10) => "47473046"
 // 8 character ID (base=16)
 uuid(8, 16) => "098F4D35"
 * */
export const uuidDiy = (len, radix) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let uuid = []
    let i
    radix = radix || chars.length

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
    } else {
        // rfc4122, version 4 form
        let r

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'

        // Fill in random data. At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
            }
        }
    }
    return uuid.join('')
}

/**
 * @desc 移动计算宽高
 * @Params {Value}
 * @method rem(Value) // Value像素值
 */
export const rem = ($pixelValue) => {
    return ($pixelValue / 24) + 'rem'
}

/**
 * @desc 四舍五入法
 * @Params {Value}
 * @method numToFixed(Value, n)
 */
export const numToFixed = (value, n) => {
    return Math.round(parseFloat(value).toFixed(10) * Math.pow(10, n)) / Math.pow(10, n)
}

/**
 * @desc 去尾法
 * @Params {Value, n}
 * @method numToFloor(value, n)
 */
export const numToFloor = function (value, n) {
    return Math.floor(parseFloat(value).toFixed(10) * Math.pow(10, n)) / Math.pow(10, n)
}

/**
 * @desc 进一法
 * @Params {Value}
 * @method numToCeil(value, n)
 */
export const numToCeil = function (value, n) {
    return Math.ceil(parseFloat(value).toFixed(10) * Math.pow(10, n)) / Math.pow(10, n)
}

/**
 * @desc 各个链接域名，以此为出口
 */
const nodeEnv = process.env.NODE_ENV
const envDev = nodeEnv === 'development'
const envTest = nodeEnv === 'test'
export const mixUrl = {
    hx24m: (path) => `https://m.huoxing24.com${path || ''}`,
    hx24www: (path) => `https://www.huoxing24.com${path || ''}`,
    hx24news: (path) => `https://news.huoxing24.com${path || ''}`,
    cococoin: (path) => `https://www.cococoin.com${path || ''}`,
    borrow: (path) => `${envDev ? ip(3026) + '/borrow' : (envTest ? 'http://mclouds.marslib.com/borrow' : 'https://borrow.mclouds.io')}`,
    main: (path) => `${envDev ? ip(3026) : (envTest ? ('http://mclouds.marslib.com' || 'http://mclouds.marslib.com') : 'https://www.mclouds.io')}${path || ''}`
}

/**
 * @desc 全站默认TDK
 */
// export const webTdk = {
//     title: isJp ? '' : '一站式算力资产服务平台-火星云矿官网',
//     keywords: '火星云矿',
//     description: isJp ? '' : '火星云矿是火星区块基于区块链技术发布的一站式实体矿机挖矿平台. 为客户提供开放、公平、透明的真实挖矿服务. 在使用集中采购和共建机制降低挖矿运行成本的同时, 利用矿机及矿场的分时共享模式降低客户参与挖矿行业的门槛, 并提供安全合规的挖矿投资渠道, 真正意义上解决了用户从购买到托管矿机一系列的挖矿难题。'
// }
export const webTdk = {
    title: 'Marsbit',
    keywords: 'Marsbit',
    description: isJp ? '' : '火星雲礦是火星區塊基於區塊鏈科技發佈的一站式實體礦機挖礦平臺.為客戶提供開放、公平、透明的真實挖礦服務.在使用集中採購和共建機制降低挖礦運行成本的同時，利用礦機及礦場的分時共亯模式降低客戶參與挖礦行業的門檻，並提供安全合規的挖礦投資通路，真正意義上解决了用戶從購買到託管礦機一系列的挖礦難題。'
}

/**
 * @desc 是否需要二次验证
 * @params {dispatch, noRedirect不跳转到绑定页面}
 * @rerurn promise
 */
export async function twiceVerify(dispatch, noRedirect) {
    const userInfo = await dispatch.public.getUseinfo({})

    let secVerify = false
    if (userInfo && userInfo.hasOwnProperty('userId')) {
        const onlyMobile = userInfo.mobile !== '' && (userInfo.email === '' && !userInfo.bindGA)
        if (onlyMobile) secVerify = 'onlyMobile'
        const onlyEmail = userInfo.email !== '' && (userInfo.mobile === '' && !userInfo.bindGA)
        if (onlyEmail) secVerify = 'onlyEmail'
        const onlyBindGA = userInfo.bindGA && (userInfo.mobile === '' && userInfo.email === '')
        if (onlyBindGA) secVerify = 'onlyBindGA'
    }
    if (!noRedirect && secVerify) window.location.href = '/usercenter'
    return secVerify
}

/**
 * @desc 是否需要kyc认证
 * @params {dispatch, noRedirect不跳转到kyc认证页面}
 * @rerurn promise
 */
export async function needKyc(dispatch, noRedirect) {
    const verifyInfo = await dispatch.public.verifyInfo({})
    let needKyc = false
    if (verifyInfo && verifyInfo.hasOwnProperty('kycLevel')) {
        if (verifyInfo.kycLevel === 0) needKyc = true
    }
    if (!noRedirect && needKyc) window.location.href = '/userkyc'
    return needKyc
}

/**
 * @desc 火星24存储cookie名称，公用cookie全部存以此为出口。
 */
export const cookiesName = {
    accountId: 'account_id',
    cToken: 'c_token',
    userId: 'user_id',
    auToken: 'au_token',
    language: 'mclouds_lang'
}

/**
 * @desc 订单支付转改
 */
export const payState = (orderState, t) => {
    let state = '未知状态'
    switch (orderState) {
        case 0:
            state = t('orderdetail.nopay')
            break
        case 1:
            state = t('orderdetail.paysucc')
            break
        case 2:
            state = t('orderdetail.payfail')
            break
        case 3:
            state = t('orderdetail.gocancel')
            break
        case 4:
            state = t('orderdetail.sxing')
            break
        case 5:
            state = t('orderdetail.jx')
            break
        case 6:
            state = t('orderdetail.car')
            break
        case 7:
            state = t('orderdetail.paynosh')
            break
        case 8:
            state = t('orderdetail.shnotg')
            break
        case 9:
            state = t('hasgrate.tjwh')
            break
        case 10:
            state = t('orderdetail.waitingpay')
            break
        case 11:
            state = t('orderdetail.refunded')
            break
        default:
            state = '未知状态'
    }
    return state
}

/**
 * @desc 订单支付方式
 */
export const payType = (payType, t) => {
    let type = '未知方式'
    switch (payType) {
        case 1:
            type = t('public.bbpay')
            break
        case 2:
            type = t('public.wechat')
            break
        case 3:
            type = t('public.zfb')
            break
        case 4:
            type = t('public.pancar')
            break
        default:
            type = '未知方式'
    }
    return type
}

/**
 * @desc 使用Crypto-js进行加密和解密
 */

const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF') // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412') // 十六位十六进制数作为密钥偏移量

// const iosKey = "1234123412ABCDEF"
// const iosIv = "ABCDEF1234123412"

// 解密方法
export const Decrypt = (word) => {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

// 加密方法
export const Encrypt = (word) => {
    let srcs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return encrypted.ciphertext.toString().toUpperCase()
}

export const Months = [
    { type: 1, moth: 'Jan' },
    { type: 2, moth: 'Feb' },
    { type: 3, moth: 'Mar' },
    { type: 4, moth: 'Apr' },
    { type: 5, moth: 'May' },
    { type: 6, moth: 'Jun' },
    { type: 7, moth: 'Jul' },
    { type: 8, moth: 'Aug' },
    { type: 9, moth: 'Sept' },
    { type: 10, moth: 'Oct' },
    { type: 11, moth: 'Nov' },
    { type: 12, moth: 'Dec' }
]

/**
 * @desc 点击复制
 */

export const Tocopy = (id) => {
    if (typeof window === 'undefined') { } else {
        var message = document.getElementById(id)
        document.execCommand('Copy')
        // 创建一个range
        var range = document.createRange()
        // 清楚页面中已有的selection
        window.getSelection().removeAllRanges()
        // 选中需要复制的节点
        range.selectNode(message)
        // 执行选中元素
        window.getSelection().addRange(range)
        // 执行 copy 操作
        // var successful = document.execCommand('copy')
        // if (successful) {
        //     Toast.error(t('public.caysucc'))
        // } else {
        //     Toast.error(t('public.cayfail'))
        // }
    }
}

/**
 * @desc 语言判断
 * @params i8n
 */
export const langWhat = (lang) => {
    if (lang.toLowerCase().substring(0, 2) === 'zh') {
        return 'zh'
    }
    if (lang.toLowerCase().substring(0, 2) === 'en') {
        return 'en'
    }
    if (lang.toLowerCase().substring(0, 2) === 'ja') {
        return 'ja'
    }
}

/**
 * @desc 获取file blob地址
 * @returns {url}
 * @method fileObjectURL(file)
 */
export const fileObjectURL = (file) => {
    let url
    if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file)
    } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
}

/**
 * @desc 云片身份认证
 * @params initYpRiddler
 */

export const infoRiddler = {
    appId: 'a8c0a90197e14dbda2621a071fd256fa',
    expired: 10,
    mode: 'dialog',
    winWidth: 400,
    lang: 'zh-cn',
    version: 'v1',
    onFail: function (code, msg, retry) {
        // alert('出错啦：' + msg + ' code: ' + code)
        retry()
    },
    beforeStart: function (next) {
        console.log('验证马上开始')
        next()
    },
    onExit: function () {
        console.log('退出验证')
    }
}

export const initYpRiddler = (idname, callback) => {
    /* eslint-disable no-new */
    new window.YpRiddler({
        appId: 'a8c0a90197e14dbda2621a071fd256fa',
        expired: 10,
        mode: 'external',
        winWidth: 350,
        lang: 'en',
        container: document.getElementById(idname),
        version: 'v1',
        onSuccess: function (validInfo, close, useDefaultSuccess) {
            callback(validInfo)
            useDefaultSuccess.call(this, true)
            close()
        },
        onFail: function (code, msg, retry) {
            // alert('出错啦：' + msg + ' code: ' + code)
            retry()
        },
        beforeStart: function (next) {
            console.log('验证马上开始')
            next()
        },
        onExit: function () {
            console.log('退出验证')
        }
    })
}

/**
 * @desc 日文下载弹窗表述
 * @params initYpRiddler
 */
export const richtext = `<div>
    <div>ユーザーの皆さまへ</div>
    <div>平素より大変お世話になっております。この度は、iOSユーザーの方のみ以下ご確認ください。</div>
    <div>【iOSユーザー対象】</div>
    <div>iOS (Apple製品)でMcloudsアプリをご利用の皆さまには、ただいまアプリが再ダウンロードできず大変ご迷惑をおかけしまして心よりお詫び申し上げます。</div>
    <div>
        <p>現在、メンテナンスをさせて頂いており、復旧には3日ほどかかると想定されています。</p>
        <p>再ダウンロードが可能になり次第、改めてお客様にご案内をさせて頂ければと存じます。</p>
    </div>
    <div>なお、お手数をお掛け致しますが、このメンテナンス期間につきましては、PC・タブレットからWebサイトをご確認くださいませ。</div>
    <div>
        <p>暗号資産を取り扱うiOSアプリは頻繁に審査が行われるため、システム上の企業用署名が弾かれることで、Mcloudsアプリがご利用できなくなる場合がございます。</p>
        <p>弊社技術チームも俊敏にインストーラーを更新させて頂いている次第です。</p>
        <p>ご不便をお掛けしまして申し訳ございません。</p>
    </div>
    <div>ご理解のほどよろしくお願い申し上げます。</div>
    <div>
        <p>Mclouds</p>
        <p>2021年11月19日</p>
    </div>
    </div>`

export const tichtextzh = `<div>
    <div>尊敬的用户：</div>
    <div>因苹果审核及第三方服务调整，导致iOS版本APP无法成功发布、频繁闪退，若您需要查看清退进度或查收代售款，建议更换Android手机重试下载。</div>
    <div>为保障平台清退工作顺利进行，日前已向待清退及清退中用户开放网站(<a href="https://www.mclouds.io">https://www.mclouds.io</a>)访问权限，待清退工作结束后网站将恢复访问限制。</div>
    <div>由此给您带来的不便我们深表歉意，敬请谅解。</div>
    </div>`

export default {
    isJp,
    axiosAjax,
    websocket,
    openNewWindow,
    uerserAgent,
    isPc,
    isMobile,
    isIos,
    isIphoneX,
    isAndroid,
    isWechat,
    isHxApp,
    isPhone,
    isPsd,
    isEmail,
    isNum,
    isJson,
    isArrayBuffer,
    isArray,
    isObject,
    isToday,
    isThisYear,
    formatNum,
    formatAbsolute,
    formatPrice,
    formatTotal,
    formatPercent,
    formatTime,
    formatPublishTime,
    numDivision,
    trim,
    toNonExponential,
    encodeSearchKey,
    dataURLtoBlob,
    sortBy,
    queryParam,
    propsInherit,
    stringArray,
    stringJsonItem,
    scrollOffset,
    windowOffset,
    elementOffset,
    mouseOffset,
    windowScroll,
    animation,
    arriveAtDom,
    deepCompare,
    deepMerge,
    webTdk,
    mixUrl,
    cookiesName,
    textOverflow,
    textLength,
    arrayMaxMin,
    rem,
    uuid,
    uuidDiy,
    logReport,
    addEvent,
    numToFixed,
    numToFloor,
    numToCeil,
    twiceVerify,
    needKyc,
    isCoco,
    Encrypt,
    Decrypt,
    langWhat,
    initYpRiddler,
    infoRiddler,
    richtext,
    tichtextzh,
    bubbleSort
}
