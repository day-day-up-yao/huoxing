/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：public function
 */

import axios from 'axios'
import Cookies from 'js-cookie'
import { hashHistory } from 'react-router'
import { message } from 'antd'
import qs from 'qs'
import md5 from 'blueimp-md5'
import { Base64 } from 'js-base64'
import store from '../store/index'
import { alertLogin } from '../actions/index'

export let URL = '/mgr'
// export const site = 'http://www.huoxing24.com'
export const site = 'http://www.huoxing24.vip'

export const getSig = () => {
    let platform = 'pc'
    let appSecret = 'Fbz]OdjAyhpqOIKA'
    let nonceArr = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890'
    let timestamp = new Date().getTime()
    let nonce = ''
    for (let i = 0; i < 6; i++) {
        let j = Math.round(Math.random() * nonceArr.length)
        nonce += nonceArr[j]
    }
    let sig = md5('platform=' + platform + '&timestamp=' + timestamp + '&nonce=' + nonce + '&' + appSecret)
    let base64 = Base64.encode(JSON.stringify({
        'platform': platform,
        'nonce': nonce,
        'timestamp': timestamp,
        'sig': sig
    }))
    return base64
}

export const getText = (str) => {
    return str
        .replace(/<[^<>]+>/g, '')
        .replace(/&nbsp;/gi, '')
}

// 手机号码验证
export const isPhoneAvailable = (phone) => {
    const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    if (!myreg.test(phone)) {
        return false
    } else {
        return true
    }
}

/**
 * @desc 身份证验证
 * @returns {boolean}
 * @Params {string} string
 * @method idCardVerify(string)
 */
export const idCardVerify = (id) => {
    const format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/

    // 号码规则校验
    if (!format.test(id)) {
        return false
    }

    // 区位码校验
    // 出生年月日校验  前正则限制起始年份为1900;
    const year = id.substr(6, 4) // 身份证年
    const month = id.substr(10, 2) // 身份证月
    const date = id.substr(12, 2) // 身份证日
    const time = Date.parse(month + '-' + date + '-' + year) // 身份证日期时间戳date
    const nowTime = Date.parse(new Date()) // 当前时间戳
    const dates = (new Date(year, month, 0)).getDate() // 身份证当月天数
    if (time > nowTime || date > dates) {
        return false
    }

    // 校验码判断
    const c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 系数
    const b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'] // 校验码对照表
    const idArray = id.split('')
    let sum = 0
    for (let k = 0; k < 17; k++) {
        sum += parseInt(idArray[k]) * parseInt(c[k])
    }
    if (idArray[17].toUpperCase() !== b[sum % 11].toUpperCase()) {
        return false
    }
    return true
}

// 标签根据type改变title
export const titleTrans = (typer, name) => {
    let type = parseInt(typer)
    if (type === 1) {
        return `${name}-行情`
    } else if (type === 3) {
        return `${name}-聚合`
    } else if (type === 2) {
        return `${name}-自媒体`
    } else {
        return name
    }
}

// export const URL = 'http://wechatstore.linekong.com'
export const axiosPost = (url, params, fn, qsTrue) => {
    URL = (url.split('/')[1] === 'passport' || url.split('/')[1] === 'market') ? '' : '/mgr'
    let _url = URL + url
    axios.post(_url, qsTrue ? qs.stringify(params) : params, {
        headers: { 'Sign-Param': getSig() }
    }).then(function (response) {
        const data = response.data
        fn.call(this, data)
    }).catch(function (error) {
        fn.call(this, error)
        if (error.response) {
            if (/^(5)\d{2}/.test(error.response.status)) {
                message.error(`服务器异常 ${error.response.status}`)
            }
            if (/^(4)\d{2}/.test(error.response.status)) {
                message.error(`请求地址或参数异常 ${error.response.status}`)
            }
        } else if (error.request) {
            message.error('网络出现异常, 请求失败!')
        } else {
            message.error('Error', error.message)
        }
    })
}

export const axiosAjaxPost = (type, url, params, fn, headers, fnErr) => {
    URL = (url.split('/')[1] === 'passport' || url.split('/')[1] === 'market') ? '' : '/mgr'
    let _url = URL + url
    let opt = {
        method: type,
        url: _url,
        headers: { 'Sign-Param': getSig() }
    }
    if (type.toUpperCase() === 'POST') {
        opt = { ...opt, data: params }
    } else {
        opt = { ...opt, params: params }
    }
    if (headers) {
        opt = { ...opt, data: params, headers: headers }
    }
    axios({ ...opt }).then(function (response) {
        const data = response.data
        fn && fn.call(this, data)
        if (!data.code || data.code === -4) {
            deleteCookies()
            Cookies.set('loginStatus', false)
            message.error('登陆状态失效, 请重新登陆!')
            store.dispatch(alertLogin(true))
            // hashHistory.push('/login')
            // return
        }
    }).catch(function (error) {
        fn && fn.call(this, error)
        if (fnErr) fnErr.call(this, error)
        if (error.response) {
            if (/^(5)\d{2}/.test(error.response.status)) {
                message.error(`服务器异常 ${error.response.status}`)
            }
            if (/^(4)\d{2}/.test(error.response.status)) {
                message.error(`请求地址或参数异常 ${error.response.status}`)
            }
        } else if (error.request) {
            message.error('网络出现异常, 请求失败!')
        } else {
            message.error(error.message ? error.message : 'error')
        }
    })
}

export const axiosAjax = (type, url, params, fn, headers, fnErr) => {
    URL = (url.split('/')[1] === 'passport' || url.split('/')[1] === 'market') ? '' : '/mgr'
    let _url = URL + url
    let opt = {
        method: type,
        url: _url,
        headers: { 'Sign-Param': getSig() }
    }
    if (type.toUpperCase() === 'POST') {
        opt = { ...opt, data: qs.stringify(params) }
    } else {
        opt = { ...opt, params: params }
    }
    if (headers) {
        opt = { ...opt, data: params, headers: headers }
    }
    axios({ ...opt }).then(function (response) {
        const data = response.data
        fn && fn.call(this, data)
        if (!data.code || data.code === -4) {
            deleteCookies()
            Cookies.set('loginStatus', false)
            message.error('登陆状态失效, 请重新登陆!')
            store.dispatch(alertLogin(true))
            // hashHistory.push('/login')
            // return
        }
    }).catch(function (error) {
        fn && fn.call(this, error)
        if (fnErr) fnErr.call(this, error)
        if (error.response) {
            if (/^(5)\d{2}/.test(error.response.status)) {
                message.error(`服务器异常 ${error.response.status}`)
            }
            if (/^(4)\d{2}/.test(error.response.status)) {
                message.error(`请求地址或参数异常 ${error.response.status}`)
            }
        } else if (error.request) {
            message.error('网络出现异常, 请求失败!')
        } else {
            message.error(error.message ? error.message : 'error')
        }
    })
}

export const axiosAjaxPromise = (obj) => new Promise(function (resolve, reject) {
    const { type, url, params, headers } = obj
    axiosAjax(type, url, params, function (res) {
        resolve(res)
    }, headers || null, function (err) {
        reject(err)
    })
})

export const postAjax = (type, url, params, fn) => {
    axios({
        method: type,
        url: url,
        data: params,
        headers: { 'Sign-Param': getSig() }
    }).then(function (response) {
        const data = response.data
        fn.call(this, data)
        if (data.status === 401) {
            message.warning(data.msg)
            hashHistory.push('/login')
        }
    }).catch(function (error) {
        fn.call(this, error)
        if (error.response) {
            if (/^(5)\d{2}/.test(error.response.status)) {
                message.error(`服务器异常 ${error.response.status}`)
            }
            if (/^(4)\d{2}/.test(error.response.status)) {
                message.error(`请求地址或参数异常 ${error.response.status}`)
            }
        } else if (error.request) {
            message.error('网络出现异常, 请求失败!')
        } else {
            message.error('Error', error.message)
        }
    })
}

export const axiosFormData = (type, url, params, fn) => {
    let _url = URL + url
    let CancelToken = axios.CancelToken
    let source = CancelToken.source()
    axios({
        method: type,
        url: _url,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Sign-Param': getSig()
        },
        timeout: 60000,
        onUploadProgress: function (progressEvent) {
        },
        cancelToken: source.token
    }).then(function (response) {
        response.data.source = source
        fn.call(this, response.data, source)
    }).catch(function (error) {
        fn.call(this, error, source)
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message)
            return false
        }
        if (error.response) {
            if (/^(5)\d{2}/.test(error.response.status)) {
                message.error(`服务器异常 ${error.response.status} 正在尝试重新上传~`)
            }
            if (/^(4)\d{2}/.test(error.response.status)) {
                message.error(`请求地址或参数异常 ${error.response.status} 正在尝试重新上传~`)
            }
        } else if (error.request) {
            message.error('网络出现异常, 正在尝试重新上传!')
        } else {
            message.error('请求出现异常, 请刷新页面重新上传!')
        }
    })
}

/** ------------------------------------ ajax start 2020年6月24日 ---------------------------------- */
/**
 * @desc ajax请求
 * @returns {data/error}
 * @Params {args} args = {type(get/post/complexpost), url, params, contentType, urlSearchParams, formData, noLoading, userDefined, host, transformRequest}
 * @method ajax({
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

const removeLoading = () => {
    if (typeof window !== 'undefined' && document.getElementById('ajaxLoading')) {
        const $ajaxLoading = document.getElementById('ajaxLoading')
        $ajaxLoading.parentNode.removeChild($ajaxLoading)
    }
}
export const ajax = (args) => new Promise(function (resolve, reject) {
    const {
        type,
        url,
        params,
        contentType,
        urlSearchParams,
        formData,
        noLoading, // 是否有加载动画
        userDefined,
        host,
        transformRequest
    } = args
    try {
        let urlLast = url
        if (host || host === '') urlLast = host + url
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
                data: qs.stringify(params)
            }
        } else if (ajaxType === 'get') {
            opt = {
                method: type,
                url: urlLast,
                params: params
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

        opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
            'Sign-Param': ajaxSignature()
        })

        axios({
            ...opt,
            timeout: 30000
        }).then(function (res) {
            if (res.data && res.data.code && res.data.code !== 1) {
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
                        // clearLoginCookies()
                        window.location.href = hashHistory.push('/#/login')
                    }
                }
            }

            removeLoading()
            resolve(res.data)
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

            const errStr = `[ajax-handle-err] url:${url}, msg:${err.message}`
            console.error(errStr)
            reject(Error(errStr))
        }
    }
})
/** ------------------------------------ ajax end 2020年6月24日 ---------------------------------- */

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

export const getCrumbKey = (location) => {
    // const {location} = this.props
    let pathStr = location.pathname.substring(1)
    let arr = []
    if (pathStr.indexOf('-') !== -1) {
        let pathArr = pathStr.split('-')
        arr.push(pathArr[0])
        arr.push(pathStr)
    } else {
        arr.push(pathStr)
    }
    return arr
}

// 删除 cookies
export const deleteCookies = () => {
    let strcookie = document.cookie
    let arrcookie = strcookie.split('; ')
    for (let i = 0; i < arrcookie.length; i++) {
        let arr = arrcookie[i].split('=')
        if (arr[0].indexOf('hx_') !== -1) {
            Cookies.remove(arr[0])
        }
    }
}

/* 时间格式化 */
export const formatDate = (val, str, rich) => {
    if (!val) {
        return 0
    }
    let _str = !str ? '-' : str
    let _time = new Date(val.toString().length !== 13 ? Date.parse(new Date()) : parseInt(val))
    let y = _time.getFullYear()
    let M = _time.getMonth() + 1
    let d = _time.getDate()
    let h = _time.getHours()
    let m = _time.getMinutes()
    let s = _time.getSeconds()
    return !rich ? y + _str + add0(M) + _str + add0(d) + ' ' + add0(h) + ':' + add0(m) + ':' + add0(s) : `<p>${y + _str + add0(M) + _str + add0(d)}</p>
        <p>${add0(h) + ':' + add0(m) + ':' + add0(s)}</p>`
}
const add0 = (m) => {
    return m < 10 ? '0' + m : m
}

/**
 * @desc 格式化时间，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @returns {string}
 * @Params {date, fmt}
 * @method formatTime(time, "yyyy-MM-dd hh:mm:ss") ==> 2006-07-02 08:09:04.423
 *         formatTime(time, "yyyy.M.d h:m:s")      ==> 2006.7.2 8:9:4.18
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

// 超出字数显示省略号
export const cutString = (str, len) => {
    // length属性读出来的汉字长度为1
    if (str && str.length) {
        if (str.length * 2 <= len) {
            return str
        }
        let strlen = 0
        let s = ''
        for (let i = 0; i < str.length; i++) {
            s = s + str.charAt(i)
            if (str.charCodeAt(i) > 128) {
                strlen = strlen + 2
                if (strlen >= len) {
                    return s.substring(0, s.length - 1) + '...'
                }
            } else {
                strlen = strlen + 1
                if (strlen >= len) {
                    return s.substring(0, s.length - 2) + '...'
                }
            }
        }
        return s
    } else {
        return ''
    }
}

// 判断是否为对象字符串
export const isJsonString = (str) => {
    try {
        if (typeof JSON.parse(str) === 'object') {
            return true
        }
    } catch (e) {
        // console.log(e)
    }
    return false
}

// 空返回展示
export const emptyOrNot = (data, value) => {
    if (data && data.trim() !== '') {
        return data
    } else {
        return !value ? '暂无' : value
    }
}

// 生成全局唯一标识符
export const generateUUID = () => {
    let d = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
}

// 图片的 dataurl 转 blob
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

// 快讯新老版本的标题和内容处理
export const getTitle = (text, pureText) => {
    if (!text) {
        return ''
    } else {
        let title = text.replace(/\r|\n|\\s/g, '')
        if (title.indexOf('【') !== -1 && title.indexOf('】') !== -1) {
            if (pureText) {
                return title.match(/【(.*)】/)[1]
            } else {
                return title.match(/【.*?】/)[0]
            }
        } else {
            return '【快讯】'
        }
    }
}

export const getContent = (content) => {
    if (!content) {
        return '无'
    } else {
        if (content.indexOf('【') !== -1 && content.indexOf('】') !== -1) {
            return content.split('】')[1].replace('</p>', '')
        } else {
            return content.replace('</p>', '')
        }
    }
}

export const getpureContent = (content) => {
    if (!content) {
        return '无'
    } else {
        const startNum = content.indexOf('<a') === -1 ? 0 : content.indexOf('<a')
        const endNum = content.indexOf('k">') === -1 ? 0 : content.indexOf('k">') + 3
        const newContent = content.substring(startNum, endNum)
        if (content.indexOf('【') !== -1 && content.indexOf('】') !== -1) {
            return content.split('】')[1].replace(newContent, '').replace(/(<\/p>|<\/a>|<p>)/gi, '')
        } else {
            return content.replace('</p>', '').replace(newContent, '').replace(/(<\/p>|<\/a>|<p>)/gi, '')
        }
    }
}
// 转换数字格式
export const tranFormat = (num) => num.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')

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
 * @desc 判断是否是正确的手机号
 * @returns {Boolean}
 * @Params {phoneNumber}
 * @method isPhone()
 */
export const isPhone = (phoneNumber) => {
    const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    return myreg.test(phoneNumber) || false
}

/**
 * @desc 数组对象方法排序:升序
 * @returns {Array}
 * @Params {array, key}
 * @method sortByKey()
 */
export const sortByKey = (array, key) => {
    return array.sort(function (a, b) {
        const x = a[key]
        const y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
}

/**
 * @desc 数组对象方法排序:降序
 * @returns {Array}
 * @Params {array, key}
 * @method sortByKey()
 */
export const sortDownByKey = (array, key) => {
    return array.sort(function (a, b) {
        const x = a[key]
        const y = b[key]
        return ((x > y) ? -1 : ((x > y) ? 1 : 0))
    })
}

// 新闻频道
export const channelIdOptions = [
    { label: '新闻', value: '1' },
    // { label: 'BTA专题', value: '12' },
    // { label: '两会', value: '10' },
    { label: '产业', value: '2' },
    { label: '项目', value: '3' },
    { label: '投资', value: '14' },
    { label: '人物', value: '4' },
    { label: '技术', value: '6' },
    { label: '挖矿', value: '13' },
    { label: '游戏', value: '7' },
    { label: '八点', value: '8' },
    { label: '周报', value: '15' },
    { label: '王峰十问', value: '9' },
    { label: '新手入门', value: '5' },
    { label: '其他', value: '-1' }
]

// 快讯频道
export const flashIdOptions = [
    { label: '安全', value: '6' },
    { label: '硅谷峰会', value: '7' },
    { label: '监管动态', value: '1' },
    { label: 'BTA专题', value: '5' },
    { label: '交易所公告', value: '2' },
    { label: '重大行情', value: '3' },
    { label: '观点', value: '4' },
    { label: '暂无', value: '0' }
]

// 快讯审核状态
export const flashAuditStatus = [
    { label: '全部', value: '' },
    { label: '待审核', value: '0' },
    { label: '审核通过', value: '1' },
    { label: '审核不通过', value: '2' }
]

// web端广告位置
export const pcAdPosition = [
    // {label: '顶部推广(100 * 100)', value: '11'},
    // {label: '顶部 Banner(800 * 100)', value: '1'},
    // {label: '首页新闻列表嵌入(800 * 140)', value: '8'},
    // {label: '新首页右侧推广(100 * 100)', value: '10'},
    // {label: '首页中部左侧', value: '2'},
    // {label: '首页中部右侧', value: '3'},
    // {label: '首页底部', value: '4'},
    // {label: '首页轮播', value: '9'},
    // {label: '新闻详情顶部', value: '5'},
    // {label: '新闻详情底部', value: '6'},
    // {label: '新闻详情侧边栏', value: '7'},
    // {label: '视频详情右侧', value: '20'}, // ---
    { label: '首页轮播', value: '1' },
    { label: '新闻列表嵌入', value: '3' },
    { label: '首页轮播右侧', value: '17' },
    { label: '顶栏广告推广', value: '11' },
    { label: '轮播下banner', value: '16' },
    { label: '首页右侧推广', value: '10' },
    { label: '新闻详情页顶部', value: '5' },
    { label: '新闻详情页底部', value: '2' },
    { label: '新闻详情页右侧', value: '7' },
    { label: '视频详情页右侧', value: '20' },
    { label: '首页活动推荐', value: '9' },
    { label: '快讯嵌入', value: '12' },
    { label: '直播详情页', value: '30' },
    { label: '直播列表页', value: '31' },
    { label: '首页顶部横条', value: '32' }
    // {label: '首页产品推荐', value: '100'}
]

// app端广告位置
export const appAdPosition = [
    { label: 'App启动页广告', value: '4' },
    { label: '首页弹出广告', value: '6' },
    { label: '个人中心循环广告', value: '13' },
    { label: '相关新闻广告', value: '14' },
    { label: '策略列表中嵌入', value: '15' },
    { label: 'APP个人页产品推荐', value: '28' },
    { label: '首页banner下广告', value: '29' },
    { label: '直播详情页', value: '30' },
    { label: '直播列表页', value: '31' }
]

// 手机端广告位置
export const mobileAdPosition = [
    { label: '首页', value: '1' },
    { label: '新闻详情页', value: '2' },
    { label: '视频详情页', value: '20' },
    { label: '新闻列表嵌入', value: '3' },
    { label: 'APP启动页广告', value: '4' }
]

// 手机端广告位显示类型
export const adTypeOptions = [
    // {label: '新闻详情', value: '3'}, // 传 新闻 id, 网页中点击跳转到新闻详情
    { label: '广告', value: '1' }, // 纯链接, 直接跳转
    { label: '自有链接', value: '2' }, // 纯链接, 直接跳转
    { label: '新闻频道', value: '4' }, // 传新闻频道, 网页中点击跳转到某一类新闻列表页
    // {label: '专题', value: '5'}, // 传专题名,  网页中点击跳转到专题页面 示例: 区块链全球峰会/20180911001406065486
    { label: '关键字/标签', value: '6' } // 传新闻关键字, 网页中点击跳转到相关标签的新闻列表
]

// 认证状态
export const auditStatus = [
    { label: '全部', value: '' },
    { label: '认证通过', value: '1' },
    { label: '待认证', value: '0' },
    { label: '认证不通过', value: '-1' },
    { label: '未认证', value: '-2' }
]

// 认证状态
export const icoStatusOptions = [
    { label: '已结束', value: 'past' },
    { label: '进行中', value: 'ongoing' },
    { label: '即将开始', value: 'upcoming' }
]

// 直播状态
export const liveStatusOptions = [
    { label: '已结束', value: '2' },
    { label: '进行中', value: '1' },
    { label: '即将开始', value: '0' }
]
// 专栏作者状态
export const authorTypeOptions = [
    { label: '全部推荐', value: '0' },
    { label: '置顶推荐', value: '1' },
    { label: '非置顶推荐', value: '2' }
]

// 新闻聚合账号状态
export const mergeStatusOptions = [
    { label: '禁止', value: '0' },
    { label: '正常', value: '1' },
    { label: '全部', value: '3' }
]
// 新闻聚合账号状态
export const mergeTypeOptions = [
    { label: '公众号/网站', value: '0' },
    { label: '头条', value: '2' }
]

// 专题状态
export const topicStatusOptions = [
    { label: '全部', value: '1' },
    { label: '首页展示', value: '2' }
]

// 专题推荐状态
export const topicRecommendOptions = [
    { label: '全部', value: '' },
    { label: '推荐中', value: '1' }
]

// app 发现页轮播类型
export const topicTypeOptions = [
    { label: '跳转到链接', value: '1' },
    { label: '待定', value: '2' },
    { label: '跳转到新闻', value: '3' },
    { label: '跳转到作者', value: '5' }
]

// 网站首页轮播类型
export const bannerOptions = [
    { label: '新闻详情', value: '1' }, // 传 新闻 id, 网页中点击跳转到新闻详情
    { label: '新闻频道', value: '2' }, // 传新闻频道, 网页中点击跳转到某一类新闻列表页
    { label: '关键字/标签', value: '3' }, // 传新闻关键字, 网页中点击跳转到相关标签的新闻列表
    { label: '专题', value: '4' }, // 传专题名,  网页中点击跳转到专题页面
    { label: '作者信息', value: '5' }, // 传作者id, 网页中点击跳转到包含作者信息的新闻列表页
    { label: '广告', value: '6' }, // 纯链接, 直接跳转
    { label: '链接跳转', value: '7' }, // 纯链接, 直接跳转
    { label: '产品', value: '8' }, // 纯链接, 直接跳转
    { label: '活动', value: '9' } // 纯链接, 直接跳转
]

// 网站首页轮播类型
export const positionOptions = [
    { label: '首页顶部轮播(pc: 532 * 335; m: 640 * 320)', value: '1' },
    { label: '首页顶部右侧(250 * 160)', value: '2' },
    { label: '我的产品轮播(100 * 100)', value: '8' },
    { label: '推荐活动轮播(328 * 175)', value: '9' }
]

// 特殊专题图片上传位置
export const actPositionOptions = [
    { label: '顶部轮播(pc:  582 * 365; m: 500 * 315)', value: '1', name: '顶部' },
    { label: '底部左侧大图(580 * 364)', value: '2', name: '底部左侧大图' },
    { label: '底部右侧小图(283 * 177)', value: '3', name: '底部右侧小图' }
]

// 特殊专题名称选项
export const activityNameList = [
    { label: '纽约峰会', value: 'nyfh' },
    { label: '硅谷峰会', value: 'ggfh' }
]

// 专题状态
export const bannerStatusOptions = [
    { label: '全部', value: '' },
    { label: ' 展示中', value: '1' },
    { label: '未展示', value: '0' }
]

// twitter账号类型
export const twitterTypeOptions = [
    { label: 'medium 作者', value: '1' },
    { label: ' medium 专题', value: '2' },
    { label: 'twitter作者', value: '3' },
    { label: '新浪微博作者', value: '4' }
]

// 菜单config
export const menuConfig = {
    '新闻管理': 1,
    '新闻聚合': 2,
    '认证审核': 3,
    '快讯管理': 4,
    '广告管理': 5,
    '视频管理': 6,
    '小程序管理': 7,
    '专栏作者管理': 8,
    '文章评论管理': 9,
    '直播管理': 10,
    '新闻专题管理': 11,
    '峰会专题管理': 12,
    '活动发布管理': 13,
    'App发现页轮播': 14,
    'App词条管理': 15,
    '首页Banner管理': 16,
    '敏感词过滤': 17,
    '首页币种推荐': 18,
    '账号管理': 19,
    '反馈管理': 20,
    '底部链接管理': 21,
    '交易所管理': 22,
    'APP 版本更新': 23,
    '币圈动态': 24,
    '热门标签管理': 25,
    '广告数据管理': 26,
    'STO数据管理': 27,
    '系统账号管理': 28,
    '火星中国行': 29,
    '快讯推送': 30,
    '火星大学': 31,
    '用户手机号替换': 32
}
