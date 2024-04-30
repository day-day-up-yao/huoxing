import {axiosAjax} from '../../public/index'
import {POST} from '../../constants/index'
import { message } from 'antd'
// 公告列表
export const getPostNoticeList = (sendData, fn) => {
    return (dispatch) => {
        let _url = '/notice/list_title'
        axiosAjax('get', _url, sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: POST.GET_POST_NOTICE_LIST,
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
