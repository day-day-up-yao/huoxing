import axios from 'axios'
import { Base64 } from 'js-base64'
import md5 from 'blueimp-md5'
import qs from 'qs'
import Cookies from 'js-cookie'
// import hmacSHA256 from 'crypto-js/hmac-sha256'
import { apiHost, ip } from '../../config/config'

/**
 * @desc 注销或检测到token过期时删除登录cookie信息
 * @method clearLoginCookies()
 */
export const clearLoginCookies = () => {
    let domain = ''
    const env = process.env.NODE_ENV
    if (env === 'test') domain = 'marslib.com'
    if (env === 'production') {
        const networkurl = window.location.hostname
        if (networkurl.indexOf('marsbit.cc') > -1) domain = 'marsbit.cc'
        if (networkurl.indexOf('marsbit.co') > -1) domain = 'marsbit.co'
        if (networkurl.indexOf('marstelegram.com') > -1) domain = 'marstelegram.com'
    }
    for (let key in cookiesName) {
        if (key === 'deviceId' || key === 'deviceUuid') continue
        // 删除老版本登录信息
        Cookies.remove(cookiesName[key])
        // 删除新版本登录信息
        Cookies.remove(cookiesName[key], { domain: domain })
    }
}

/**
 * @desc 2021-11-26 marsbit.co域名备灾临时代码
 */
export const domainSuffix = (req) => {
    const hostServer = req && req.headers ? req.headers.host : ''
    const host = typeof window === 'undefined' ? hostServer : window.location.host
    if (!host || typeof host !== 'string') return 'co'
    if (host.includes('marsbit.cn')) return 'cn'
    if (host.includes('marsbit.net')) return 'net'
    if (host.includes('marsbit.co')) return 'co'
    return 'co'
}
export const replaceDomain = (data, req) => {
    let dataTmp = isObject(data) ? JSON.stringify(data) : data
    if (typeof dataTmp === 'string') {
        const domainWww = `www.marsbit.${domainSuffix(req)}`
        const domainNew = `news.marsbit.${domainSuffix(req)}`
        const domainMp = `mp.marsbit.${domainSuffix(req)}`
        dataTmp = dataTmp.replace(/www.marsbit.co/g, domainWww)
        dataTmp = dataTmp.replace(/news.marsbit.co/g, domainNew)
        dataTmp = dataTmp.replace(/mp.marsbit.co/g, domainMp)
        dataTmp = isJson(dataTmp) ? JSON.parse(dataTmp) : dataTmp
    }
    return dataTmp
}

/**
 * @desc ajax请求
 * nodeJs接口请求错误由render.js统一处理; 前端做单独做明确提示。
 * 错误捕获在每个地方都catch并且throw Error，即使上一层已经捕获。不然error.stack不会追溯到错误位置
 * @returns {data/error}
 * @Params {args} args = {type(get/post/complexpost), url, params, contentType, urlSearchParams, formData, noLoading, userDefined, host, transformRequest, noLog}
 * @method axiosAjax({
        type: get/post/complexpost,
        url: ',
        contentType: 'application/x-home.js.js-form-urlencoded',
        formData: true,
        noLoading: true,
        userDefined: {
            'hx-cookie': Base64.encode(JSON.stringify({
                    'passportId': Cookies.get('passportId'),
                    'token': Cookies.get('token')
                }))
        },
        transformRequest: '',
        urlSearchParams: true,
        params: {
            dataone: 'one',
            datatwo: 'two'
        }
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

export const getAPISign = () => {
    // 随机数字字母，建议4位
    // const appKey = 'ysBokbA3gKUzt61DmeHWjTFYZ07CGPQL'
    // const appSecret = 'a2PAJXRBChdpGvoyKEz3lLS5Yf1bM0NO'
    // const nonce = Number.parseInt((Math.random() * (9999 - 1000 + 1) + 1000).toString(), 10)
    // // 当前时间戳（秒）
    // const timestamp = Number.parseInt((Date.now() / 1000).toString(), 10)
    // // 使用appSecret进行HMacSha256加密函数
    // const hmac256 = hmacSHA256(`${appKey}${nonce}${timestamp}`, appSecret)

    // const headers = {
    //     'X-Api-Key': appKey,
    //     'X-Api-Sign': `${hmac256}.${nonce}.${timestamp}`
    // }

    // return headers
}

const removeLoading = () => {
    if (typeof window !== 'undefined' && document.getElementById('ajaxLoading')) {
        const $ajaxLoading = document.getElementById('ajaxLoading')
        $ajaxLoading.parentNode.removeChild($ajaxLoading)
    }
}
export const axiosAjax = (args) => new Promise(function (resolve, reject) {
    const {
        req,
        type,
        url,
        params,
        contentType,
        urlSearchParams,
        formData,
        noLoading, // 是否有加载动画
        noLog, // code不等于1时是否打印日志。[]空数组为都不上报，[-4, 5, 7]当res.data.code为其中一项时就不上报
        userDefined,
        host,
        transformRequest,
        isDefi // Defi数据站
    } = args
    const request = args.req || (args.params && args.params.req)
    if (args.params && args.params.req) delete args.params.req

    // 获取并设置请求语言
    let language = 'zh-CN'
    let langServer = request && request.language // 服务端请求
    let langBrowser = typeof window !== 'undefined' && Cookies.get(cookiesName.language) // 前端请求
    if (langServer) language = langServer
    if (langBrowser) language = langBrowser

    // console.log(langServer, langBrowser)

    // params.lang = language

    try {
        let urlLast = apiHost + url
        if (host || host === '') urlLast = host + url
        if (isDefi) urlLast = url

        // 2021-11-26 marsbit.co域名备灾临时代码
        if (typeof window === 'undefined') {
            // 后端替换请求域名为指定专有Ip或域名
        } else {
            urlLast = urlLast.replace('.co', `.${domainSuffix(req)}`)
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

        let opt = null
        const ajaxType = type.toLowerCase()
        if (ajaxType === 'post') {
            opt = {
                method: type,
                url: urlLast,
                data: qs.stringify({
                  ...params,
                  lang: language
                })
            }
        } else if (ajaxType === 'get') {
            opt = {
                method: type,
                url: urlLast,
                params: {
                  ...params,
                  lang: language
                }
            }
        } else if (ajaxType === 'complexpost') {
            opt = {
                method: 'post',
                url: urlLast,
                params: params
            }
        } else if (ajaxType === 'postpure') {
            opt = {
                method: 'post',
                url: urlLast,
                data: params
            }
        }

        // 仅浏览器端支持
        if (urlSearchParams) {
            let searchParams = new URLSearchParams()
            for (let key in params) {
                searchParams.append(key, params[key])
            }

            opt = {
                method: type,
                url: urlLast,
                data: searchParams
            }
        }

        // 仅浏览器端支持
        if (formData) {
            let fmData = new FormData()
            for (let key in params) {
                fmData.append(key, params[key])
            }

            opt = {
                method: type,
                url: urlLast,
                data: fmData
            }
        }

        opt.headers = {
          'Accept-Language': language
        }

        if (contentType) {
            opt.headers = {
                'Content-Type': contentType
            }
        }

        if (userDefined) {
            opt.headers = Object.assign(opt.headers ? opt.headers : {}, userDefined)
        }

        if (transformRequest) {
            opt.transformRequest = transformRequest
        }

        if (isDefi) {
            opt.headers = Object.assign(opt.headers ? opt.headers : {}, { 'x-apiKey': '4b92a4b6-8ad2-408a-9169-301e03da89c7' })
        }

        opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
            'Sign-Param': ajaxSignature()
        })

        axios({
            ...opt,
            timeout: 30000
        }).then(function (res) {
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

            if (res.data && res.data.code && res.data.code !== 1 && !noLogTrue) {
                const resCode = res.data.code
                const resMsg = res.data.msg ? res.data.msg : 'api code is not 1'
                // -4需要登录， -1未查询到记录
                if (typeof window === 'undefined') {
                    if (resCode !== -4 && resCode !== -1) {
                        throw Error(JSON.stringify({
                            message: 'api-msg',
                            httpCode: 200,
                            url: url,
                            resCode: resCode,
                            resMsg: resMsg
                        }))
                    }
                } else {
                    if (resCode === -4) { // 登录失效时清除登录信息并跳转到登录页面
                        clearLoginCookies()
                        // window.location.href = mixUrl.main('/account')
                    }
                    if (resCode !== -4 && url.indexOf('/logger') === -1) {
                        logReport({
                            message: 'client-api-msg',
                            httpCode: 200,
                            url: url,
                            params: isJson(params) ? JSON.stringify(params) : params,
                            resCode: resCode,
                            resMsg: resMsg,
                            framework: true
                        })
                    }
                }
            }

            removeLoading()

            // 2021-11-26 marsbit.co域名备灾临时代码
            resolve(replaceDomain(res.data, req))
        }).catch(function (err) {
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
                removeLoading()

                errObj.message = 'client-api-err'
                errObj.params = isJson(params) ? JSON.stringify(params) : params
                if (err.stack) errObj.stack = err.stack
                url.indexOf('/logger') === -1 && logReport({ ...errObj, framework: true })

                const errStr = `[api-err] url:${urlParam}, status:${codeParam}, msg:${errMsg}`
                console.error(errStr)
                reject(Error(errStr))
            }
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
 * @desc websocket连接
 * @params {args} args = {
 *    host 如果不是默认域名添加此参数,
 *    url 接口路由,
 *    params 发送的参数,
 *    binaryType 指定接收数据类型: blob,arraybuffer，
 *    https true支持https传此参数，
 *    success 连接成功，返回event,
 *    message 接收消息，返回event,
 *    close 连接关闭时，返回此event,
 *    error 连接错误，返回此event,
 * }
 * @returns {ws} ws: 此websocket对象，用于后续其它操作。
 * ws.message(callback)
 * ws.message(function (event) {
            console.log(event)
   })
 * ws.send()
 * ws.close()
 * ws.bufferedAmount 0发送完毕，else发送中
 * ws.readyState CONNECTING：值为0，表示正在连接。OPEN：值为1，表示连接成功，可以通信了。CLOSING：值为2，表示连接正在关闭。CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
 * @method websocket(args)
 * */
export const websocket = (args) => new Promise(function (resolve, reject) {
    let messageEventProxy = {}
    try {
        const { host, url, params, binaryType, https, success, message, close, error } = args

        const wssUrl = `${(https || process.env.NODE_ENV === 'production') ? 'wss' : 'ws'}://${(host || (apiHost.indexOf('http') > -1 ? apiHost.split('://')[1] : apiHost)) + (url || '')}`

        let ws
        let lockReconnect = false // 避免重复连接
        if (window.WebSocket || window.MozWebSocket) {
            // onopen, onmessage心跳检测
            const heartCheck = {
                timeout: 25000,
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
                        // 如果再timeout时间内没有重置，认为后端主动断开连接，则进行重连
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

                /** @desc 自定义message事件
                 * 增加代理当onmessage返回消息时，触发自定义事件message的参数callback执行
                 * 由于会多次调用message，为了保证proxy唯一性，uuid生成eventProxyKey，监听并执行
                 * 若直接改变messageEventProxy，则后边调用message会覆盖上次调用的值，则监听无效
                 *
                 * 思路:
                 * 1,创建messageEventProxy对象，保存要被监听的自定义message对象
                 * 2,定义message方法参数，回调函数callback
                 * 3,方法内定义proxy代理，监听uuid生成唯一key值eventProxyKey值更新时，执行callback函数
                 */
                ws.message = (callback) => {
                    const eventProxyKey = uuid()
                    messageEventProxy[eventProxyKey] = new Proxy({ event: null }, {
                        set: function (target, propKey, value, receiver) {
                            target[propKey] = value

                            callback(value)
                            return receiver
                        }
                    })
                }

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
                    for (const key in messageEventProxy) {
                        messageEventProxy[key].event = event
                    }
                }
                ws.onclose = (event) => {
                    reconnect()
                    if (close) close(event)
                }
                ws.onerror = (err) => {
                    reconnect()
                    if (error) error(err)
                }

                // 页面关闭或刷新前关闭ws连接
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
    return userAgent.indexOf('marsbit') > -1 || false
}

/**
 * @desc 判断是否为正确的密码规则: 密码长度6~16位，且同时包含字母和数字
 * @returns {boolean}
 * @Params {password} string
 * @method isPsd(password)
 */
export const isPsd = (password) => {
    const reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,16}$/
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
    // const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    const myreg = /^[0-9]*$/
    return myreg.test(phoneNumber) || false
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
 * @desc 快讯时间格式化
 * @params {createdTime, serverTime, mode} createdTime当前时间, serverTime服务器时间, mode参考formatTime格式{hour, day, year}
 * @return {timeString}
 */
export const flashTime = (createdTime, serverTime, mode) => {
    let hourMode = 'hh:mm'
    let dayMode = 'MM月dd日 hh:mm'
    let yearMode = 'yyyy-MM-dd hh:mm'
    if (mode) {
        if (mode.hour) hourMode = mode.hour
        if (mode.day) dayMode = mode.day
        if (mode.year) yearMode = mode.year
    }
    const timeFormat = isThisYear(createdTime, serverTime) ? (isToday(createdTime, serverTime) ? hourMode : dayMode) : yearMode
    return formatTime(createdTime, timeFormat)
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
    return new Date(date).getFullYear() === (serverTime ? new Date().getFullYear() : new Date().getFullYear())
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
 * @method mouseOffset()
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

    function getReqCallback () {
        // let count = 0 // 记录总共运行次数
        let start = null // 标识是否第一次调用，首次复制给lastTimestamp
        let lastTimestamp = null // 记录每次调用时间
        let delta = 0 // 相邻调用相隔时间
        return function req (timestamp) {
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

    function compare2Objects (x, y) {
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
 * @desc 快讯标题截取
 * @params params = item 后台返回快讯obj
 * @return {title, content}
 */
export const flashRecognize = (item) => {
    let title = ''
    let content = item.content
    if (!item.title) {
        let startIndex = item.content.indexOf('【') === -1 ? 0 : item.content.indexOf('【') + 1
        let endIndex = item.content.indexOf('】') === -1 ? 0 : item.content.indexOf('】')
        title = item.content.substring(startIndex, endIndex)
        content = item.content.substring(endIndex + 1)
    } else {
        title = item.title
        content = item.content
    }

    return {
        title,
        content
    }
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
 * @desc 跳转到url。注：只能用于前端跳转，添加cdn后后端跳转不起作用
 * @params {url需要跳转到url}
 * @method redirectUrl(url)直接跳转，不管pc还是移动,
 * redirectUrl('mob', url)当mob链接被pc访问时跳转，
 * redirectUrl('pc', url)当pc链接被mob访问时跳转
 */
export const redirectUrl = function () {
    if (typeof window === 'undefined') return
    if (arguments.length === 1) {
        window.location.href = arguments[0]
    } else {
        if (arguments[0] === 'mob' && isPc()) window.location.href = arguments[1]
        if (arguments[0] === 'pc' && !isPc()) window.location.href = arguments[1]
    }
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
 * @desc 设置+获取+删除cookie
 * @Params {Value}
 * @method
 * cookie.set(key, val, {expires, domain})
 * cookie.get(key)
 * cookie.del(key)
 */
export const cookie = {
    set: function (key, val, args) {
        var date = new Date() // 获取当前时间
        var expiresDays = args.expires // 将date设置为n天以后的时间
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000) // 格式化为cookie识别的时间
        document.cookie = key + '=' + val + ';expires=' + date.toGMTString() + ';domain=' + args.domain // 设置cookie
    },
    get: function (key) {
        /* 获取cookie参数 */
        var cookies = document.cookie.replace(/[ ]/g, '') // 获取cookie，并且将获得的cookie格式化，去掉空格字符
        var arrCookie = cookies.split(';') // 将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
        var tips // 声明变量tips
        for (var i = 0; i < arrCookie.length; i++) { // 使用for循环查找cookie中的tips变量
            var arr = arrCookie[i].split('=') // 将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if (key === arr[0]) { // 匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips = arr[1] // 将cookie的值赋给变量tips
                break
            }
        }
        return tips
    },
    del: function (key) {
        var date = new Date() // 获取当前时间
        date.setTime(date.getTime() - 10000) // 将date设置为过去的时间
        document.cookie = key + '=v; expires =' + date.toGMTString() // 设置cookie
    }
}

/**
 * @desc 各个链接域名，以此为出口
 */
const nodeEnv = process.env.NODE_ENV
const envDev = nodeEnv === 'development'
const envTest = nodeEnv === 'test'
export const mixUrl = {
    en: (path) => `http://www.marsfinance.net/${path || ''}`,
    quanter: (path) => `http://quanter.marsbit.co${path || ''}`,
    baike: (path) => `http://baike.marsbit.co${path || ''}`,
    dappspy: (path) => `https://www.dappspy.com${path || ''}`,
    bbs: (path) => `http://bbs.marsbit.co${path || ''}`,
    mclouds: (path) => `https://www.mclouds.io${path || ''}`,
    cococoin: (path) => `https://www.cococoin.com/${path || ''}`,
    trade: (path) => `https://trade.marsbit.co/${path || ''}`,
    cq: (path) => `http://www.cryptoquanter.com${path || ''}`,
    clab: (path) => `http://consensus-lab.com${path || ''}`,
    mp: (path, req) => {
        // 2021-11-26 marsbit.co域名备灾临时代码
        const hostPrd = `https://mp.marsshare.cc`
        return hostPrd
    },
    zt: (path) => `${envDev ? ip(3008) : (envTest ? 'http://zt.marslib.com' : 'https://zt.marsbit.co')}${path || ''}`,
    m: (path, req) => {
        let hostPrd = 'https://m.marsshare.cc'
        // if (req && req.hostname.indexOf('marstelegram') > -1) {
        //     hostPrd = 'https://m.marstelegram.com'
        // }
        // if (req && req.hostname.indexOf('marsbit.cc') > -1) {
        //     hostPrd = 'https://m.marsbit.cc'
        // }
        // if (req && req.hostname.indexOf('marsshare.cc') > -1) {
        //   hostPrd = 'https://m.marsshare.cc'
        // }
        // if (req && req.hostname.indexOf('marsbit.info') > -1) {
        //   hostPrd = 'https://m.marsbit.info'
        // }
        // const hostPrd = req && req.hostname.indexOf('marstelegram') > 1 ? 'https://m.marstelegram.com' : 'https://m.marsbit.co'
        return `${envDev ? ip(3012) : (envTest ? 'http://m.marslib.com' : hostPrd)}${path || ''}`
    },
    main: (path, req) => {
        // 2021-11-26 marsbit.co域名备灾临时代码
        let hostPrd = 'https://www.marsshare.cc'
        // if (req && req.hostname.indexOf('marstelegram') > -1) {
        //     hostPrd = 'https://www.marstelegram.com'
        // }
        // if (req && req.hostname.indexOf('marsbit.cc') > -1) {
        //     hostPrd = 'https://www.marsbit.cc'
        // }
        // if (req && req.hostname.indexOf('marsshare.cc') > -1) {
        //   hostPrd = 'https://www.marsshare.cc'
        // }
        // if (req && req.hostname.indexOf('marsbit.info') > -1) {
        //   hostPrd = 'https://www.marsbit.info'
        // }
        // const hostPrd = req && req.hostname.indexOf('marstelegram') > 1 ? 'https://www.marstelegram.com' : 'https://www.marsbit.co'
        return `${envDev ? ip(3014) : (envTest ? 'http://www.marslib.com' : hostPrd)}${path || ''}`
    },
    news: (path, req) => {
        // 2021-11-26 marsbit.co域名备灾临时代码
        let hostPrd = 'https://news.marsshare.cc'
        // if (req && req.hostname.indexOf('marstelegram') > -1) {
        //     hostPrd = 'https://news.marstelegram.com'
        // }
        // if (req && req.hostname.indexOf('marsbit.cc') > -1) {
        //     hostPrd = 'https://news.marsbit.cc'
        // }
        // if (req && req.hostname.indexOf('marsshare.cc') > -1) {
        //   hostPrd = 'https://news.marsshare.cc'
        // }
        // if (req && req.hostname.indexOf('marsbit.info') > -1) {
        //   hostPrd = 'https://news.marsbit.info'
        // }
        // const hostPrd = req && req.hostname.indexOf('marstelegram') > 1 ? 'https://news.marstelegram.com' : 'https://news.marsbit.co'
        return `${envDev ? ip(3012) : (envTest ? 'http://news.marslib.com' : hostPrd)}${path || ''}`
    },
    token: (path) => `${envDev ? ip(3018) : (envTest ? 'http://token.marslib.com' : 'https://token.marsbit.co')}${path || ''}`
}

/**
 * @desc 全站默认TDK
 */
export const webTdk = {
    title: 'MarsBit—聚焦全球区块链科技前沿动态',
    keywords: '区块链,区块链新闻,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,区块链活动,比特币,BTC,比特币价格,BTC价格,POWER,POWER大会,MarsBit',
    description: 'MarsBit是领先的区块链产业信息服务平台，由资深区块链团队倾力打造，为区块链爱好者提供全球最新的区块链新闻资讯'
}

/**
 * @desc 火星24存储cookie名称，公用cookie全部存以此为出口。
 */
export const cookiesName = {
    nickName: 'hx24_nickName',
    passportId: 'hx24_passportId',
    iconUrl: 'hx24_iconUrl',
    realAuth: 'hx24_realAuth',
    faceAuth: 'hx24_faceAuth',
    intro: 'hx24_intro',
    token: 'hx24_token',
    phone: 'hx24_phone',
    userCookieUuid: 'hx24_userCookieUuid',
    eventId: 'hx24_eventId',
    preEventId: 'hx24_preEventId',
    deviceUuid: 'hx24_deviceUuid',
    traceId: 'hx24_traceId',
    deviceId: 'hx24_deviceId',
    festival: 'hx24_festivalCloseTime',
    language: 'marsbit_lang'
}

/**
 * @desc 段落关键字高亮显示
 * @params {content, keyword, color} content段落内容, keyword关键字, color高亮颜色(非必填 默认为红色#e61e1e)
 * @method keyLight(content, keyword)
 * @eg <h1 dangerouslySetInnerHTML={{ __html: keyLight('ababab', 'ba') }}/>
 */
export const keyLight = (content, keyword, color) => {
    let bgColor = color || '#e61e1e'
    const a = content.toLowerCase()
    if (isArray(keyword)) {
        let newContent = content
        keyword.map((item) => {
            let regEx = new RegExp(item, 'gi')
            if (regEx.test(newContent)) {
                newContent = newContent.replace(regEx, '<span style="color:' + bgColor + '">$&</span>')
            }
        })
        return newContent
    } else {
        const b = keyword.toLowerCase()
        const indexof = a.indexOf(b)
        const c = indexof > -1 ? content.substr(indexof, keyword.length) : ''
        let sKey = `<span style='color: ${bgColor}'>${c}</span>`
        let regEx = new RegExp(keyword, 'gi')
        return content.replace(regEx, sKey)
    }
}

/**
 * @desc 美元单位换算
 * @params {number} 数值
 */
export const getUnit = (number) => {
    let str = ''
    if (number !== '') {
        let num = Number(number)
        if (num >= 1000000000) {
            str = '$ ' + (num / 1000000000).toFixed(2) + 'B'
        } else if (num >= 1000000) {
            str = '$ ' + (num / 1000000).toFixed(2) + 'M'
        } else if (num >= 1000) {
            str = '$ ' + (num / 1000000).toFixed(2) + 'K'
        } else if (num < 0) {
            str = '— —'
        } else {
            str = '$ ' + (num).toFixed(2)
        }
    } else {
        str = ''
    }

    return str
}

/**
 * @desc 数字格式化 (3位加一个逗号 eg:   333,333,333)
 * @returns {string}
 */
export const addComma = (num) => {
    let number = (num || 0).toString()
    let result = ''
    while (number.length > 3) {
        result = ',' + number.slice(-3) + result
        number = number.slice(0, number.length - 3)
    }
    if (number) {
        result = number + result
    }
    return result
}

/**
 * @desc 替换文本中的链接文字为超链接
 * @returns {html}
 */
export const urlToLink = (str) => {
    var re = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
    str = str.replace(re, function (website) {
        return "<a href='" + website + "' target='_blank'>" + website + '</a>'
    })
    return str
}

/** @desc 获取文件扩展名 */
export const fileExtension = (fileUrl) => {
    const singfileArray = fileUrl.split('.')
    return singfileArray[singfileArray.length - 1]
}

/**
 * @desc 是否支持自动播放
 * @returns {string}
 */
export const isAutoplaySupported = (callback) => {
    // Is the callback a function?

    if (callback && typeof callback !== 'function') {
        console.log('isAutoplaySupported: Callback must be a function!')
        return false
    }
    // Check if sessionStorage exist for autoplaySupported,
    // if so we don't need to check for support again
    if (!sessionStorage.autoplaySupported) {
        // Create video element to test autoplay
        var video = document.createElement('video')
        video.autoplay = true
        video.src = 'data:video/mp4;base64,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'
        video.load()
        video.style.display = 'none'
        video.playing = false
        video.play()
        // Check if video plays
        video.onplay = function () {
            this.playing = true
        }
        // Video has loaded, check autoplay support
        video.oncanplay = function () {
            let res = true
            if (video.playing) {
                sessionStorage.autoplaySupported = 'true'
                res = true
            } else {
                sessionStorage.autoplaySupported = 'false'
                res = false
            }
            if (callback) callback(res)
        }
    } else {
        // We've already tested for support
        // use sessionStorage.autoplaySupported
        let res = true
        if (sessionStorage.autoplaySupported === 'true') {
            res = true
        } else {
            res = false
        }
        if (callback) callback(res)
    }
}

/**
 * @desc 复制文字内容到粘贴板
 * @param {String} text 需要复制的内容
 * @return {Boolean} 复制成功:true或者复制失败:false  执行完函数后，按ctrl + v试试
*/

export const execCommandCopy = (text) => {
    let textareaEl = document.createElement('textarea')
    textareaEl.setAttribute('readonly', 'readonly') // 防止手机上弹出软键盘
    textareaEl.value = text
    document.body.appendChild(textareaEl)
    textareaEl.select()
    const res = document.execCommand('copy')
    document.body.removeChild(textareaEl)
    console.log('复制成功')
    return res
}

// 获取字符长度
export const GetLength = (str) => {
    if (typeof str !== 'string') return 0
    let realLength = 0
    let len = str.length
    let charCode = -1
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1
        } else {
            realLength += 2
        }
    }
    return realLength
}

/**
 * @desc 是否是 naga.one || naga.is
 */
export const nagacomlist = ['www.naga.one', 'www.naga.is', 'm.naga.one']
// , '10.0.8.138', 'www.marslib.com'
export const naGacom = (req) => req && typeof window === 'undefined'
    ? nagacomlist.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : nagacomlist.indexOf(window.location.hostname) > -1

/**
 * @desc 是否是 m.marsbit.co || www.marsbit.co || new.marsbit.co
 */
export const marsbitcoHost = ['m.marsbit.co', 'www.marsbit.co', 'news.marsbit.co']
// export const isQuattroWallet = (req) => true
export const isMarsbitco = (req) => req && typeof window === 'undefined'
    ? marsbitcoHost.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : marsbitcoHost.indexOf(window.location.hostname) > -1

/**
 * @desc 是否是大会域名 power.marsbit.co
 */
export const powerHost = ['power.marsbit.co']
// export const isQuattroWallet = (req) => true
export const isPowersite = (req) => req && typeof window === 'undefined'
    ? powerHost.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : powerHost.indexOf(window.location.hostname) > -1

/**
 * @desc 是否是 m.marsbit.cc || www.marsbit.cc || new.marsbit.cc
 */
export const marsbitccHost = ['m.marsbit.cc', 'www.marsbit.cc', 'news.marsbit.cc', '10.0.8.138']
// export const isQuattroWallet = (req) => true
export const isMarsbitcc = (req) => req && typeof window === 'undefined'
    ? marsbitccHost.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : marsbitccHost.indexOf(window.location.hostname) > -1

/**
 * @desc 是否是 marsbit.info
 */
export const marsbitinfoHost = ['m.marsbit.info', 'www.marsbit.info', 'news.marsbit.info']
// export const isQuattroWallet = (req) => true
export const isMarsbitinfo = (req) => req && typeof window === 'undefined'
    ? marsbitinfoHost.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : marsbitinfoHost.indexOf(window.location.hostname) > -1

/**
 * @desc 是否是 marsbit.info
 */
export const marsshareHost = ['m.marsshare.cc', 'www.marsshare.cc', 'news.marsshare.cc']
// export const isQuattroWallet = (req) => true
export const isMarsshare = (req) => req && typeof window === 'undefined'
    ? marsshareHost.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : marsshareHost.indexOf(window.location.hostname) > -1

/**
 * @desc 是否是 m.marstelegram.com || www.marstelegram.com || new.marstelegram.com
 */
export const marstelegramHost = ['m.marstelegram.com', 'www.marstelegram.com', 'news.marstelegram.com']
// export const isQuattroWallet = (req) => true
export const isMarstelegram = (req) => req && typeof window === 'undefined'
    ? marstelegramHost.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : marstelegramHost.indexOf(window.location.hostname) > -1

export default {
    clearLoginCookies,
    ajaxSignature,
    axiosAjax,
    websocket,
    openNewWindow,
    uerserAgent,
    isPc,
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
    flashRecognize,
    flashTime,
    redirectUrl,
    rem,
    uuid,
    uuidDiy,
    logReport,
    cookie,
    keyLight,
    getUnit,
    addComma,
    isAutoplaySupported,
    urlToLink,
    fileExtension,
    execCommandCopy,
    GetLength,
    naGacom,
    isMarsbitco,
    isMarsbitcc,
    isMarsshare,
    isMarsbitinfo,
    isMarstelegram,
    isPowersite
}
