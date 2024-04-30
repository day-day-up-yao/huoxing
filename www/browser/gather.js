import Cookies from 'js-cookie'

/* const addEvent = (ele, evType, fn, useCapture) => {
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

const ready = (fn) => {
    // 执行完成判断
    let done = false
    let top = true // 判断当前窗口是否在顶层窗口，不是的话报错

    const win = window
    const doc = win.document
    const root = doc.documentElement
    const modern = doc.addEventListener // 高级浏览器和低级浏览器判断变量

    const add = modern ? 'addEventListener' : 'attachEvent'
    const rem = modern ? 'removeEventListener' : 'detachEvent'
    const pre = modern ? '' : 'on'

    const init = (e) => {
        // 保证每个预加载的事件只执行一次fn，包括DOMContentLoaded。但是保证init事件不再在load事件中执行。
        if (e.type === 'readystatechange' && doc.readyState !== 'complete') return
        // 将onload同名的加载事件清除掉，防止又执行一次，作者这倒是想的很周到啊
        (e.type === 'load' ? win : doc)[rem](pre + e.type, init, false)
        // 下面是DOMContentLoaded或者readystatechange真正完成的时候才会执行，或者更低级浏览器完成时执行
        if (!done && (done = true)) {
            fn.call(win, e.type || e)
        }
    }
    const poll = () => {
        // ie7以及以下的浏览器使用doscroll进行模拟domcontentloaded
        try { root.doScroll('left') } catch (e) {
            // 因为间隔50毫秒时间还是相对较长的，可能这个时候readystatechange已经提早执行了
            setTimeout(poll, 50)
            return
        }
        // 下面是保证低级浏览器如果不支持readystatechange的情况下，一定会执行这个init函数
        init('poll')
    }

    // 如果文档readyState为complete代表load事件准备被触发，所以这个时候可以直接执行要执行的函数了
    if (doc.readyState === 'complete') {
        fn.call(win, 'lazy')
    } else {
        // 不是最新的浏览器，进行doScroll加载
        // 可以使用Charles中国年的Throttle Settings来限速实现执行这个函数，我是限速到10kb
        if (!modern && root.doScroll) {
            // 判断当前窗口是否插入到了iframe窗口，因为这个属性兼容性未知，需要用try防止出错
            try { top = !win.frameElement } catch (e) { }
            // 如果当前窗口是以iframe插入到窗口中的，那么应该使用readystatechange
            if (top) poll()
        }
        doc[add](pre + 'DOMContentLoaded', init, false) // 只有ie9以及更高版本支持
        doc[add](pre + 'readystatechange', init, false) // 兼容ie8以及更低的浏览器
        win[add](pre + 'load', init, false) // 高级浏览器清除win的onload中执行的函数，IE浏览器清除doc中的onload函数
    }
} */

const isLocalStorageSupported = () => {
    try {
        const testKey = 'test'
        const storage = window.sessionStorage
        storage.setItem(testKey, 'testValue')
        storage.removeItem(testKey)
        return true
    } catch (error) {
        return false
    }
}

const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

const cookiesName = {
    userCookieUuid: 'hx24_userCookieUuid',
    eventId: 'hx24_eventId',
    preEventId: 'hx24_preEventId',
    deviceUuid: 'hx24_deviceUuid'
}
const { userCookieUuid, eventId, preEventId, deviceUuid } = cookiesName

let domain = window.location.hostname
let apiHost = 'http://api.marslib.com'
const env = process.env.NODE_ENV
if (env === 'test') domain = 'marslib.com'
if (env === 'production') {
    domain = 'marsbit.co'
    apiHost = 'https://api.marsbit.co'
}

const cookieEnabled = navigator.cookieEnabled
const localstorageEnabled = isLocalStorageSupported()

// 当前日期
const curDate = new Date()
// 当前时间戳
const curTamp = curDate.getTime()
// 当日凌晨的时间戳,减去一毫秒是为了防止后续得到的时间不会达到00:00:00的状态
const curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1
// 当日已经过去的时间（毫秒）
const passedTamp = curTamp - curWeeHours
// 当日剩余时间
const leftTamp = 24 * 60 * 60 * 1000 - passedTamp
const leftTime = new Date()
leftTime.setTime(leftTamp + curTamp)

let eventIdTmp = uuid().replace(/-/g, '')
if (cookieEnabled) {
    // 激活cookie则设置cookie
    if (!Cookies.get(userCookieUuid)) Cookies.set(userCookieUuid, uuid(), { domain: domain, expires: leftTamp / (24 * 60 * 60 * 1000) })
    Cookies.set(preEventId, (Cookies.get(eventId) || ''), { domain: domain, expires: 365 })
    Cookies.set(eventId, eventIdTmp, { domain: domain, expires: 365 })
    !Cookies.get(deviceUuid) && Cookies.set(deviceUuid, uuid().replace(/-/g, ''), { domain: domain, expires: 365 })
}

const isLocalstorageSet = ((cookieEnabled && !Cookies.get(eventId)) || !cookieEnabled) && localstorageEnabled
if (isLocalstorageSet) {
    // 支持localstorage设置localstorage
    const expiresName = `expires_${userCookieUuid}`
    const userCookieUuidStorage = localStorage.getItem(userCookieUuid)
    const userCookieUuidStorageTime = localStorage.getItem(expiresName)
    if (!userCookieUuidStorage || new Date(userCookieUuidStorageTime).toDateString() !== new Date().toDateString()) {
        localStorage.setItem(userCookieUuid, uuid())
        localStorage.setItem(expiresName, leftTime)
    }
    localStorage.setItem(preEventId, localStorage.getItem(eventId) || '')
    localStorage.setItem(eventId, uuid().replace(/-/g, ''))
    !localStorage.getItem(deviceUuid) && localStorage.setItem(deviceUuid, uuid().replace(/-/g, ''))
}

let imgUrl = `${apiHost}/passport/account/recommend/gather.jpg?url=${encodeURIComponent(window.location.href)}&timestamp=${new Date().getTime()}&device_source=${window.hx24Flatform}&id=${eventIdTmp}`
if (!cookieEnabled && !isLocalStorageSupported) { // 未激活cookie并且未激活localstorage时，带上参数哪怕为空
    imgUrl += `&${userCookieUuid}=''&${preEventId}=''&${eventId}=${uuid()}&${deviceUuid}=''`
}
if (isLocalstorageSet) { // 未激活cookie+激活cookie但未设置成功cookie，但支持localstorage情况下，路径中带uuid相关参数
    const getItem = (key) => `&${key}=${localStorage.getItem(key)}`
    imgUrl += getItem(userCookieUuid) + getItem(preEventId) + getItem(eventId) + getItem(deviceUuid)
}

const sendLog = (type) => {
    let img = new Image()
    const imgId = uuid()
    window[imgId] = imgId
    img.onload = function () {
        img.onload = null
        img = window[imgId] = null
    }
    img.src = `${imgUrl}&type=${type}`
}

sendLog('loading')
// addEvent(window, 'unload', function () {
//     sendLog('unload')
// })
// ready(function () {
//     sendLog('ready')
// })

// addEvent(document.body, 'click', function (event) {
//     let aEle = event.target
//     while (aEle.tagName.toLowerCase() !== 'a') {
//         aEle = aEle.parentNode
//         if (aEle === document.body) {
//             aEle = null
//             break
//         }
//     }
//     if (aEle) {
//         console.log('你点击了body里的a')
//     }
// })
