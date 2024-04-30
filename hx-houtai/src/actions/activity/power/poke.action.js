/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../../public/index'
import {POWERPOKE, SELECTEDDATA} from '../../../constants/index'
import { message } from 'antd'

// 帖子列表
export const getPowerPokeList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/powerChongqing/getPokerList' : '/post/search'
        axiosAjax('post', _url, !sendData ? {} : sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addPowerPokeData({'list': actionData}))
                // dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize || 20, 'currPage': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 选中数据
export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

export const addPowerPokeData = (data) => {
    return {type: POWERPOKE.ADD_DATA, data}
}

export const addPowerPokeQuery = (data) => {
    return {type: POWERPOKE.ADD_QUERY, data}
}

export const editPowerPokeUserInfo = (data) => {
    return {type: POWERPOKE.EDIT_USER_INFO, data}
}

export const editPowerPokeList = (data, index) => {
    return {type: POWERPOKE.EDIT_LIST_ITEM, data, index}
}

export const delPowerPokeData = (index) => {
    return {type: POWERPOKE.DEL_LIST_ITEM, index}
}

export const delReplyList = (index) => {
    return {type: POWERPOKE.DEL_REPLY_LIST, index}
}

export const setSearchQuery = (data) => {
    return {type: POWERPOKE.SET_SEARCH_QUERY, data}
}

export const setFilterData = (data) => {
    return {type: POWERPOKE.SET_FILTER_DATA, data}
}

export const setPageData = (data) => {
    return {type: POWERPOKE.SET_PAGE_DATA, data}
}
