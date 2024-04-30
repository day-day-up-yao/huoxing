import { axiosAjax } from '../../public/index'
import { TAGSV2, SELECTEDDATA } from '../../constants/index'
import {message} from 'antd'

export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 标签列表
export const getTagsv2List = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/tagmgr/tags/list' : '/tagmgr/search' // post没有,tag有
        axiosAjax('get', _url, !sendData ? {} : { ...sendData, createrType: 0 }, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addTagsv2Data({ 'list': actionData.inforList }))
                dispatch(setPageData({ 'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'currPage': actionData.currentPage }))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const getTagv2ItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/tagmgr/tagInfo', { ...sendData }, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addTagsv2Data({ 'info': actionData }))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 获取详情
export const addTagsv2Data = (data) => {
    return {type: TAGSV2.ADD_DATA, data}
}
export const setPageData = (data) => {
    return {type: TAGSV2.SET_PAGE_DATA, data}
}
export const addTagsv2Query = (data) => {
    return {type: TAGSV2.ADD_QUERY, data}
}
export const editTagsv2List = (data, index) => {
    return {type: TAGSV2.EDIT_LIST_ITEM, data, index}
}
export const delTagsv2Data = (index) => {
    return {type: TAGSV2.DEL_LIST_ITEM, index}
}
export const setSearchQuery = (data) => {
    return {type: TAGSV2.SET_SEARCH_QUERY, data}
}
export const setFilterData = (data) => {
    return {type: TAGSV2.SET_FILTER_DATA, data}
}
