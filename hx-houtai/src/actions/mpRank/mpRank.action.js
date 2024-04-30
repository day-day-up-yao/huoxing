/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../public/index'
import {MPRANK} from '../../constants/index'
import { message } from 'antd'

// 火星号榜单管理列表
export const getMpRankList = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('get', '/rank/list', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: MPRANK.MPRANK_LIST,
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

// 分类
export const getMpRankType = (fn) => {
    return (dispatch) => {
        axiosAjax('get', '/rank/type', {}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: MPRANK.MPRANK_TYPE,
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

// 详情
export const getMpRankDetail = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('get', '/rank/one', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: MPRANK.MPRANK_DETAIL,
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

// 帖子详情
// export const getVideoItemInfo = (sendData, fn) => {
//     return (dispatch) => {
//         axiosAjax('post', '/video/getbyid', {...sendData}, function (res) {
//             if (res.code === 1) {
//                 const actionData = res.obj
//                 dispatch(addVideoData({'info': actionData}))
//                 if (fn) {
//                     fn(actionData)
//                 }
//             } else {
//                 message.error(res.msg)
//             }
//         })
//     }
// }
