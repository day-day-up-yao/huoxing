import {axiosAjax} from '../../../public/index'
import {POWERZH} from '../../../constants'
import { message } from 'antd'

// 嘉宾列表
export const getGuestList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power3/guest/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERZH.GUESTLIST,
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
    return {type: POWERZH.GUESTSETPAGE, data}
}

// 议程管理列表
export const getAgendaList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power3/agenda/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERZH.AGENDALIST,
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
                    type: POWERZH.AGENDALISTTYHPE,
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
        axiosAjax('post', '/power3/company/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERZH.COLLABORATELIST,
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
        axiosAjax('post', '/power3/image/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERZH.IMGLIST,
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

// 奖项列表
export const getPrizeList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power3/award/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERZH.PRIZELIST,
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

// 周边列表
export const getActivityList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/power3/activity/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POWERZH.ACTIVITYLIST,
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
