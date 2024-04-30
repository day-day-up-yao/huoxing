/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../public/index'
import {LECTURER, SELECTEDDATA} from '../../constants/index'
import { message } from 'antd'

// 选中数据
export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 获取讲师列表
export const getLecturerList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/college/lecturer/list' : '/post/search'
        axiosAjax('post', _url, !sendData ? {} : {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addLecturerData({'list': actionData.inforList}))
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

// 用户详情
export const getLecturerItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/caster/user/getbyid', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addLecturerData({'info': actionData}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const addLecturerData = (data) => {
    return {type: LECTURER.ADD_DATA, data}
}

export const addLecturerQuery = (data) => {
    return {type: LECTURER.ADD_QUERY, data}
}

export const editLecturerUserInfo = (data) => {
    return {type: LECTURER.EDIT_USER_INFO, data}
}

export const editLecturerList = (data, index) => {
    return {type: LECTURER.EDIT_LIST_ITEM, data, index}
}

export const delLecturerData = (index) => {
    return {type: LECTURER.DEL_LIST_ITEM, index}
}

export const setSearchQuery = (data) => {
    return {type: LECTURER.SET_SEARCH_QUERY, data}
}

export const setFilterData = (data) => {
    return {type: LECTURER.SET_FILTER_DATA, data}
}

export const setPageData = (data) => {
    return {type: LECTURER.SET_PAGE_DATA, data}
}
