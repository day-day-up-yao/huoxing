import {axiosAjax} from '../../public/index'
import {POSTACCOUNT} from '../../constants/index'
import {message} from 'antd'

// 列表
export const getPostTacticsList = (type, sendData, fn) => {
    return (dispatch) => {
        axiosAjax(type, '/news/strategyCategory/showStrategyCategorylist', sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POSTACCOUNT.LIST_POST_TACTICS,
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
