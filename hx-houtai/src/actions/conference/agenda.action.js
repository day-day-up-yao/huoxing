import { axiosAjax } from '../../public'
import { AGENDA, SELECTEDDATA } from '../../constants/index'
import { message } from 'antd'

export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 获取大会议程列表 获取议程详情用list代表
export const getAgendaList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/power/agendaList' : '/power/search'
        axiosAjax('get', _url, !sendData ? {} : { ...sendData, createType: 0 }, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addAgendaData({ 'list': actionData.inforList }))
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

export const addAgendaData = (data) => {
    return {type: AGENDA.ADD_DATA, data}
}
export const setPageData = (data) => {
    return {type: AGENDA.SET_PAGE_DATA, data}
}
export const addAgendaQuery = (data) => {
    return {type: AGENDA.ADD_QUERY, data}
}
export const editAgendaAList = (data, index) => {
    return {type: AGENDA.EDIT_LIST_ITEM, data, index}
}
export const delAgendaData = (index) => {
    return {type: AGENDA.DEL_LIST_ITEM, index}
}
export const setSearchQuery = (data) => {
    return {type: AGENDA.SET_SEARCH_QUERY, data}
}
export const setFilterData = (data) => {
    return {type: AGENDA.SET_FILTER_DATA, data}
}
