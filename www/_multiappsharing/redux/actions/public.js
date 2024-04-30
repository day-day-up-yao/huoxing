
import Cookies from 'js-cookie'
import { axiosAjax, cookiesName, isObject } from '../../public/index'
import {
    GETPARTNERLINKS,
    GETFRIENDLYLINKS,
    GETAD,
    ACTIONERROR,
    GETADIMPLANT,
    GATHERPUSH
} from '../constants/public'

const { hxHost, apiHost } = require('../../../config/config')
/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 事件埋点
 * data 可以是 ArrayBufferView，Blob，DOMString 或 Formdata，根据官方规范，
 * 需要 request header 为 CORS-safelisted-request-header，在这里则需要保证 Content-Type 为以下三种之一：
 * application/x-www-form-urlencoded
 * multipart/form-data
 * text/plain
 * 我们一般会用到 DOMString , Blob 和 Formdata 这三种对象作为数据发送到后端，下面以这三种方式为例进行说明
 */
// const syncReport = (url, { data = {}, headers = {} } = {}) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('POST', url, false)
//     xhr.withCredentials = true
//     Object.keys(headers).forEach((key) => {
//         xhr.setRequestHeader(key, headers[key])
//     })
//     xhr.send(JSON.stringify(data))
// }
const reportData = function (url, data, type) {
    if (window.navigator && window.navigator.sendBeacon) {
        let params = data

        if (type === 'formdata') {
            params = new FormData()
            Object.keys(data).forEach((key) => {
                let value = data[key]
                if (typeof value !== 'string') {
                    // formData只能append string 或 Blob
                    value = JSON.stringify(value)
                }
                params.append(key, value)
            })
        }

        if (type === 'blob') {
            params = new Blob([JSON.stringify(data), {
                type: 'application/x-www-form-urlencoded'
            }])
        }

        if (!type) {
            params = JSON.stringify(params)
        }

        navigator.sendBeacon(url, params)
    } else {
        // 不支持时，用同步的xhr替代
        const xhr = new XMLHttpRequest()
        xhr.open('POST', arguments[0], true)
        xhr.send(arguments[1])
    }
}
export const gather = (payload) => {
    const params = {
        ip: '',
        type: 'stat',
        payload
    }
    const url = `${apiHost}/passport/account/recommend/gather`

    reportData(url, params)
}

/**
 * @desc 右侧下载广告
 */
export const getDownLoadImg = () => axiosAjax({
    type: 'get',
    host: '',
    url: `https://static.marsbit.co/production/right_ad_img.json?timestamp=${Date.parse(new Date())}`,
    noLoading: true
})

/**
 * @desc 获取安卓下载地址
 */
export const getAndroidDownloadUrl = () => axiosAjax({
    type: 'get',
    url: '/mgr/app/web/url',
    noLoading: true
})

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取尾部链接
 * @Params {params} params = {category}
 */
export const getFooterData = (params) => {
    return async dispatch => {
        try {
            const reqData = (type) => axiosAjax({
                host: (apiHost === 'https://api.huoxing24.com' || apiHost === 'http://api.marslib.com') ? apiHost : hxHost,
                type: 'complexpost',
                url: '/info/news/getfooterinfo',
                params: { type: type, ...params }
            })

            const data = await Promise.all([
                reqData(3),
                reqData(1)
            ]).catch(function (err) {
                throw Error(err)
            })

            const partner = data[0]
            const friendly = data[1]

            if (partner.code === 1) {
                dispatch({
                    type: GETPARTNERLINKS,
                    data: partner.obj.inforList
                })
            }

            if (friendly.code === 1) {
                dispatch({
                    type: GETFRIENDLYLINKS,
                    data: friendly.obj.inforList
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: ACTIONERROR,
                data: err
            })
            throw Error(err)
        }
    }
}

/**
 * @desc 获取广告
 * @Params {params} params = {adPlace 数字之间用英文逗号相隔，形如 1,2,3的形式, type1:PC段；2:移动端}
 */
export const getAd = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/ad/showad',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETAD,
                    data: data.obj
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: ACTIONERROR,
                data: err
            })
            throw Error(err)
        }
    }
}

/**
 * @desc 获取嵌入广告
 * @Params {params} params = {adPlace: 广告位置, type: 类型}
 */
export const getAdImplant = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'postpure',
                url: '/info/ad/v2/showad?type=1',
                params: params
            })

            if (data.code === 1) {
                dispatch({
                    type: GETADIMPLANT,
                    data: data.obj
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: ACTIONERROR,
                data: err
            })
            throw Error(err)
        }
    }
}

/**
 * @desc 事件埋点
 * @Params {params} params = {adPlace: 广告位置, type: 类型}
 */
export const gatherPush = (eventType, eventInfo) => ({
    type: GATHERPUSH,
    data: { eventType, eventInfo }
})
// 上报直播事件
export const gatherLive = ({ liveState, eventId, eventInfo }) => {
    const userId = typeof window !== 'undefined' && Cookies.get(cookiesName.passportId)

    // 是否为主播
    const isMain = liveState && liveState.presenterList && Array.isArray(liveState.presenterList) && liveState.presenterList.length > 0 && liveState.presenterList[0].passportId === userId

    // 是否为嘉宾
    const gusetList = liveState && liveState.guestList && Array.isArray(liveState.guestList) ? liveState.guestList : []
    let isGuest
    for (const val of gusetList) {
        if (val.passportId !== userId) continue
        isGuest = true
        break
    }

    const eventOtherInfo = eventInfo && isObject(eventInfo) ? eventInfo : {}

    const pushData = {
        'event_id': eventId,
        ...eventOtherInfo
    }
    if (liveState) {
        if (userId && (isMain || isGuest)) { // 用户角色：主播（broadcaster）、嘉宾（guest）、观众（audience）
            pushData['room_role'] = isMain
                ? 'broadcaster'
                : isGuest ? 'guest' : 'audience'
        }
        if (liveState.roomId) pushData['room_id'] = liveState.roomId
        if (liveState.name) pushData['room_title'] = liveState.name
        if (liveState.adminCreateFlag) pushData['room_type'] = liveState.adminCreateFlag === 1 ? 'by_admin' : 'by_user' // 直播间创建类型：用户创建(by_user)、火星后台创建(by_admin)
    }
    return gatherPush('LIVE', pushData)
}
