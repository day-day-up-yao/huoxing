/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../../public/index'
import {POWERFAME, SELECTEDDATA} from '../../../constants/index'
import { message } from 'antd'

// 选中数据
export const selectData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 帖子列表
export const powerFameList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/powerChongqing/getTopList' : '/post/search'
        axiosAjax('get', _url, !sendData ? {} : {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addHotWordsData({'list': actionData}))
                // dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'currentPage': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const addWords = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/powerChongqing/addTopList', {...sendData}, function (res) {
            if (res.code === 1) {
                message.success('添加成功！')
                if (fn) {
                    fn()
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const addHotWordsData = (data) => {
    return {type: POWERFAME.ADD_DATA, data}
}

export const addHotWordsQuery = (data) => {
    return {type: POWERFAME.ADD_QUERY, data}
}

export const editHotWordsUserInfo = (data) => {
    return {type: POWERFAME.EDIT_USER_INFO, data}
}

export const editHotWordsList = (data, index) => {
    return {type: POWERFAME.EDIT_LIST_ITEM, data, index}
}

export const delHotWordsData = (index) => {
    return {type: POWERFAME.DEL_LIST_ITEM, index}
}

export const delReplyList = (index) => {
    return {type: POWERFAME.DEL_REPLY_LIST, index}
}

export const setSearchQuery = (data) => {
    return {type: POWERFAME.SET_SEARCH_QUERY, data}
}

export const setFilterData = (data) => {
    return {type: POWERFAME.SET_FILTER_DATA, data}
}

export const setPageData = (data) => {
    return {type: POWERFAME.SET_PAGE_DATA, data}
}
