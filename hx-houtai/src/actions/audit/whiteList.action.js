/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../public/index'
import { message } from 'antd'
import {AUDIT} from '../../constants'

// 白名单列表
export const getWhiteList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/author/whitelist/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: AUDIT.WHITE_LIST,
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
    return {type: AUDIT.PAGE_DATA, data}
}
