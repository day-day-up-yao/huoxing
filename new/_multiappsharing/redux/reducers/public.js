import { combineReducers } from 'redux'
import Cookies from 'js-cookie'

import { uuidDiy, cookiesName } from '../../public/index'
import comment from './comment'
import flash from './flash'
import news from './news'
import market from './market'
import login from './login'
import header from './header'
import home from './home'
import live from './live'

import {
    GETFRIENDLYLINKS,
    GETPARTNERLINKS,
    GETAD,
    GETADIMPLANT,
    GATHERPUSH
} from '../constants/public'

/** @desc 尾部合作伙伴，友情链接 */
const initStateFooter = {
    partner: [],
    friendly: []
}
const footer = (state = initStateFooter, action) => {
    switch (action.type) {
        case GETPARTNERLINKS:
            return { ...state, partner: action.data }
        case GETFRIENDLYLINKS:
            return { ...state, friendly: action.data }
        default:
            return state
    }
}

/** @desc 广告 */
const initStateAd = {}
const adData = (state = initStateAd, action) => {
    switch (action.type) {
        case GETAD:
            return action.data
        default:
            return state
    }
}

/** @desc 嵌入广告 */
const adImplantData = {}
const adImplant = (state = adImplantData, action) => {
    switch (action.type) {
        case GETADIMPLANT:
            return action.data
        default:
            return state
    }
}

/** @desc 统计上报 */
const gatherData = []
const gather = (state = gatherData, action) => {
    switch (action.type) {
        case GATHERPUSH:
            const preTraceId = Cookies.get(cookiesName.traceId)
            const traceId = uuidDiy(32, 16)
            Cookies.set(cookiesName.traceId, traceId)

            let deviceId = Cookies.get(cookiesName.deviceId)
            if (!deviceId) {
                deviceId = uuidDiy()
                Cookies.set(cookiesName.deviceId, deviceId)
            }

            const reportData = {
                trace_id: traceId,
                pre_trace_id: preTraceId,
                device_type: 'web',
                device_id: deviceId,
                event_type: action.data && action.data.eventType,
                timestamp: parseInt(new Date().getTime() / 1000),
                event_info: action.data && action.data.eventInfo
            }

            const userId = Cookies.get(cookiesName.passportId)
            if (userId) reportData['user_id'] = userId

            const userName = Cookies.get(cookiesName.nickName)
            if (userName) reportData['user_name'] = userName

            state.push(reportData)
            return [...state]
        default:
            return state
    }
}

export default combineReducers({
    login,
    footer,
    adData,
    market,
    flash,
    comment,
    news,
    adImplant,
    header,
    home,
    live,
    gather
})
