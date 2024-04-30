import { axiosAjax } from '../../../public/index'
import { POWERYN } from '../../../constants'
import { message } from 'antd'

// 嘉宾列表
export const getGuestList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power4/guestList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERYN.GUESTLIST,
                    data: actionData
                })
                dispatch(setPageData({ 'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage }))
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
    return { type: POWERYN.GUESTSETPAGE, data }
}

// 议程管理列表
export const getAgendaList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power4/agendaList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERYN.AGENDALIST,
                    data: actionData
                })
                dispatch(setPageData({ 'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage }))
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
        axiosAjax('post', '/power4/showHall', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERYN.AGENDALISTTYHPE,
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
        axiosAjax('post', '/power4/cooperationList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERYN.COLLABORATELIST,
                    data: actionData
                })
                dispatch(setPageData({ 'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage }))
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
        axiosAjax('post', '/power4/showImage', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERYN.IMGLIST,
                    data: actionData
                })
                dispatch(setPageData({ 'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage }))
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
        axiosAjax('post', '/power4/showBanner', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERYN.RECOMMENDLIST,
                    data: actionData
                })
                dispatch(setPageData({ 'recordCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'page': actionData.currentPage }))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}
