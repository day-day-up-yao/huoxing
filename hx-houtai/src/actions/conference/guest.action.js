import { axiosAjax } from '../../public'
import { GUEST, SELECTEDDATA } from '../../constants/index'
import { message } from 'antd'

export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 获取大会嘉宾列表 获取嘉宾详情用list代表
export const getSpeakerList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/power/speakerList' : '/power/search'
        axiosAjax('get', _url, !sendData ? {} : { ...sendData, createType: 0 }, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addGuestData({ 'list': actionData.inforList }))
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

export const getGuestItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('get', '/power/speakerList', !sendData ? {} : { ...sendData, createType: 0, pageSize: 1000, currentPage: 1 }, function (res) {
            if (res.code === 1) {
                const actionData = res.obj.inforList
                const result = actionData.filter((item) => item.id === parseInt(sendData.id))
                dispatch(addGuestData({ 'info': result[0] }))
                if (fn) {
                    fn(result)
                }
            } else {
                message.error(res.obj)
            }
        })
    }
}

export const addGuestData = (data) => {
    return {type: GUEST.ADD_DATA, data}
}
export const setPageData = (data) => {
    return {type: GUEST.SET_PAGE_DATA, data}
}
export const addGuestQuery = (data) => {
    return {type: GUEST.ADD_QUERY, data}
}
export const editGuestList = (data, index) => {
    return {type: GUEST.EDIT_LIST_ITEM, data, index}
}
export const delGuestData = (index) => {
    return {type: GUEST.DEL_LIST_ITEM, index}
}
export const setSearchQuery = (data) => {
    return {type: GUEST.SET_SEARCH_QUERY, data}
}
export const setFilterData = (data) => {
    return {type: GUEST.SET_FILTER_DATA, data}
}
