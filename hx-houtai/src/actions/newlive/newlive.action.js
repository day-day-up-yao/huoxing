/**
* Author: wangguodong
* Time: 2021/9/7
* Description: Description
*/

import {axiosAjax} from '../../public/index'
import {NEWLIVE, SELECTEDDATA} from '../../constants/index'
import { message } from 'antd'

export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 获取用户直播间列表
export const getNewLiveList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/video/live/room/list' : '/post/search'
        axiosAjax('GET', _url, !sendData ? {} : sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addnewLiveData({'list': actionData.inforList}))
                dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize || 20, 'currPage': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                } else {
                    message.error(res.msg)
                }
            }
        })
    }
}
// 获取直播间详情
export const getUserLiveItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('get', '/video/live/room/detail', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addnewLiveData({'info': actionData}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 更新数据
export const addnewLiveData = (data) => {
    return {type: NEWLIVE.ADD_DATA, data}
}
// 编辑条目
export const editNewliveList = (data, index) => {
    return {type: NEWLIVE.EDIT_LIST_ITEM, data, index}
}

// 删除条目
export const delNewliveData = (index) => {
    return {type: NEWLIVE.DEL_LIST_ITEM, index}
}
// 设置过滤
export const setFilterData = (data) => {
    return {type: NEWLIVE.SET_FILTER_DATA, data}
}

// 设置搜索
export const setSearchQuery = (data) => {
    return {type: NEWLIVE.SET_SEARCH_QUERY, data}
}

// 设置分页
export const setPageData = (data) => {
    return {type: NEWLIVE.SET_PAGE_DATA, data}
}
