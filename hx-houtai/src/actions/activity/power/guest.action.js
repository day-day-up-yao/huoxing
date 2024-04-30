/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../../public/index'
import {POWERGUEST, SELECTEDDATA} from '../../../constants'
import { message } from 'antd'

// 选中数据
export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 用户列表
export const getPowerGuestList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/commonGuest/listGuest' : '/post/search'
        axiosAjax('post', _url, !sendData ? {} : {category: 1, ...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addPowerGuestData({'list': actionData.inforList}))
                dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const addPowerGuestData = (data) => {
    return {type: POWERGUEST.ADD_DATA, data}
}

export const addPowerGuestQuery = (data) => {
    return {type: POWERGUEST.ADD_QUERY, data}
}

export const editPowerGuestUserInfo = (data) => {
    return {type: POWERGUEST.EDIT_USER_INFO, data}
}

export const editPowerGuestList = (data, index) => {
    return {type: POWERGUEST.EDIT_LIST_ITEM, data, index}
}

export const delPowerGuestData = (index) => {
    return {type: POWERGUEST.DEL_LIST_ITEM, index}
}

export const setSearchQuery = (data) => {
    return {type: POWERGUEST.SET_SEARCH_QUERY, data}
}

export const setFilterData = (data) => {
    return {type: POWERGUEST.SET_FILTER_DATA, data}
}

export const setPageData = (data) => {
    return {type: POWERGUEST.SET_PAGE_DATA, data}
}
