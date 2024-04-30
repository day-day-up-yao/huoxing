import { axiosAjax } from '../../../public/index'
import { POWERSZ } from '../../../constants'
import { message } from 'antd'

// 嘉宾列表
export const getGuestList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power6/guestList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERSZ.GUESTLIST,
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
    return { type: POWERSZ.GUESTSETPAGE, data }
}

// 议程管理列表
export const getAgendaList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power6/agendaList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERSZ.AGENDALIST,
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
        axiosAjax('post', '/power6/showHall', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERSZ.AGENDALISTTYHPE,
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
        axiosAjax('post', '/power6/cooperationList', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERSZ.COLLABORATELIST,
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
        axiosAjax('post', '/power6/showImage', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERSZ.IMGLIST,
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
        axiosAjax('post', '/power6/showBanner', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERSZ.RECOMMENDLIST,
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
