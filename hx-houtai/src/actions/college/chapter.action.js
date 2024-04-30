/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../public/index'
import {CHAPTER, SELECTEDDATA} from '../../constants/index'
import { message } from 'antd'

// 选中数据
export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 帖子列表
export const getChapterList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/college/lesson/chapterList' : '/post/search'
        axiosAjax('get', _url, !sendData ? {} : {...sendData}, function (res) {
            if (fn) {
                fn(res)
            }
            if (res.code === 1) {
                const actionData = res.obj
                let transList = actionData.inforList.map((item) => {
                    item.item_url = item.key
                    return item
                })
                dispatch(addChapterData({'list': transList}))
                dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'currPage': actionData.currentPage}))
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 帖子详情
export const getChapterItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/college/lesson/getChapter', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addChapterData({'info': actionData}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 获取课程的时长和章节数
export const getCourseDuration = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/college/lesson/calChapterInfo', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addChapterData({'courseDuration': actionData}))
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
        axiosAjax('post', '/news/setorder', {...sendData}, function (res) {
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

export const addChapterData = (data) => {
    return {type: CHAPTER.ADD_DATA, data}
}

export const addChapterQuery = (data) => {
    return {type: CHAPTER.ADD_QUERY, data}
}

export const editChapterUserInfo = (data) => {
    return {type: CHAPTER.EDIT_USER_INFO, data}
}

export const editChapterList = (data, index) => {
    return {type: CHAPTER.EDIT_LIST_ITEM, data, index}
}

export const delChapterData = (index) => {
    return {type: CHAPTER.DEL_LIST_ITEM, index}
}

export const delReplyList = (index) => {
    return {type: CHAPTER.DEL_REPLY_LIST, index}
}

export const setSearchQuery = (data) => {
    return {type: CHAPTER.SET_SEARCH_QUERY, data}
}

export const setFilterData = (data) => {
    return {type: CHAPTER.SET_FILTER_DATA, data}
}

export const setPageData = (data) => {
    return {type: CHAPTER.SET_PAGE_DATA, data}
}
