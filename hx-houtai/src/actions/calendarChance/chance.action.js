import {axiosAjax} from '../../public/index'
import { message } from 'antd'
import {CALENDARCHANCE} from '../../constants/index'

// 获取机会列表
export const getChanceLists = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('get', '/chance/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: CALENDARCHANCE.CHANCE_LISTS,
                    data: actionData
                })
                dispatch(getPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'currPage': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const getPageData = (data) => {
    return {type: CALENDARCHANCE.CHANCE_PAGE_DATA, data}
}

// 获取机会详情
export const getChanceListDetail = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/lives/getbyid', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: CALENDARCHANCE.CALENDAR_LIST_DETAIL,
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
