// import $ from 'jquery'
import { axiosAjax } from '../../public/index'
import { message } from 'antd'

import {
    AMENDPHONE
} from '../../constants/index'

// 修改用户手机号
export const getAmendPhone = (sendData, fn) => {
    return (dispatch) => {
        let _url = '/account/author/phone/update/list'
        axiosAjax('get', _url, sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: AMENDPHONE.AMENDPHONE_LIST,
                    actionData
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                res.msg && message.error(res.msg)
            }
        })
    }
}
