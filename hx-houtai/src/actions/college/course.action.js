/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../public/index'
import {COURSE, SELECTEDDATA} from '../../constants/index'
import { message } from 'antd'

// 选中数据
export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 课程列表
export const getCourseList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/college/lesson/list' : '/post/search'
        axiosAjax('get', _url, !sendData ? {} : {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addCourseData({'list': actionData.inforList}))
                dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'currPage': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                res.msg && message.error(res.msg)
            }
        })
    }
}

// 课程详情
export const getCourseItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/college/lesson/getById', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addCourseData({'info': actionData}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const newsToTop = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/activity/settoporder', {...sendData}, function (res) {
            // console.log(res)
            if (res.code === 1) {
                if (parseInt(sendData.topOrder) === 0) {
                    message.success('取消置顶成功！')
                } else {
                    message.success('置顶成功！')
                }
                if (fn) {
                    fn()
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const addCourseData = (data) => {
    return {type: COURSE.ADD_DATA, data}
}

export const addCourseQuery = (data) => {
    return {type: COURSE.ADD_QUERY, data}
}

export const editCourseUserInfo = (data) => {
    return {type: COURSE.EDIT_USER_INFO, data}
}

export const editCourseList = (data, index) => {
    return {type: COURSE.EDIT_LIST_ITEM, data, index}
}

export const delCourseData = (index) => {
    return {type: COURSE.DEL_LIST_ITEM, index}
}

export const delReplyList = (index) => {
    return {type: COURSE.DEL_REPLY_LIST, index}
}

export const setSearchQuery = (data) => {
    return {type: COURSE.SET_SEARCH_QUERY, data}
}

export const setFilterData = (data) => {
    return {type: COURSE.SET_FILTER_DATA, data}
}

export const setPageData = (data) => {
    return {type: COURSE.SET_PAGE_DATA, data}
}
