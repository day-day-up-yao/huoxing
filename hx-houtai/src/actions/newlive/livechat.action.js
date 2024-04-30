/**
* Author: wangguodong
* Time: 2021/9/7
* Description: Description
*/

import {axiosAjax} from '../../public/index'
import {CHATLIST, SELECTEDDATA} from '../../constants/index'
import { message } from 'antd'

export const selectData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 获取直播间评论\聊天列表
export const getChatLivelist = (type, sendData, fn) => {
    return (dispatch) => {
        axiosAjax('GET', '/video/live/comment/list', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addCommentData({'inforList': actionData.inforList}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}
// 更新数据
export const addCommentData = (data) => {
    return {type: CHATLIST.ADD_DATA, data}
}
// 删除条目
export const delCommentData = (index) => {
    return {type: CHATLIST.DEL_LIST_ITEM, index}
}
