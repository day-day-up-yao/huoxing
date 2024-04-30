import {axiosAjax} from '../../../public/index'
import {POWERBJ} from '../../../constants'
import { message } from 'antd'

// 嘉宾列表
export const getGuestList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power2/guestList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERBJ.GUESTLIST,
                    data: actionData
                })
                dispatch(setPageData({'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const setPageData = (data) => {
    return {type: POWERBJ.GUESTSETPAGE, data}
}

// 议程管理列表
export const getAgendaList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power2/agendaList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERBJ.AGENDALIST,
                    data: actionData
                })
                dispatch(setPageData({'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 议程分类列表
export const getAgendaListType = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power2/showHall', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERBJ.AGENDALISTTYHPE,
                    data: actionData
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 议程合作方列表
export const getAgendaCollaborate = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power2/cooperationList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERBJ.COLLABORATELIST,
                    data: actionData
                })
                dispatch(setPageData({'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 议程现场图集列表
export const getImgList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power2/showImage', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERBJ.IMGLIST,
                    data: actionData
                })
                dispatch(setPageData({'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 议程推荐列表
export const getRecommendList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power2/showBanner', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERBJ.RECOMMENDLIST,
                    data: actionData
                })
                dispatch(setPageData({'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}
