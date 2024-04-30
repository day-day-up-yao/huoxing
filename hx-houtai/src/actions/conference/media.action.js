import { axiosAjax } from '../../public'
import { MEDIA, SELECTEDDATA } from '../../constants/index'
import { message } from 'antd'

export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 获取大会合作媒体列表 获取合作详情用list代表
export const getMediaList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/power/mediaList' : '/power/search'
        axiosAjax('get', _url, !sendData ? {} : { ...sendData, createType: 0 }, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addMediaData({ 'list': actionData.inforList }))
                dispatch(setPageData({ 'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'currPage': actionData.currentPage }))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.obj)
            }
        })
    }
}

export const addMediaData = (data) => {
    return {type: MEDIA.ADD_DATA, data}
}
export const setPageData = (data) => {
    return {type: MEDIA.SET_PAGE_DATA, data}
}
export const addMediaQuery = (data) => {
    return {type: MEDIA.ADD_QUERY, data}
}
export const editMediaList = (data, index) => {
    return {type: MEDIA.EDIT_LIST_ITEM, data, index}
}
export const delMediaData = (index) => {
    return {type: MEDIA.DEL_LIST_ITEM, index}
}
export const setSearchQuery = (data) => {
    return {type: MEDIA.SET_SEARCH_QUERY, data}
}
export const setFilterData = (data) => {
    return {type: MEDIA.SET_FILTER_DATA, data}
}
