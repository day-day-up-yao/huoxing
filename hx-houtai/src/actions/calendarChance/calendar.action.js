import {axiosAjax} from '../../public/index'
import { message } from 'antd'
import {CALENDARCHANCE} from '../../constants/index'

// 获取日历列表
export const getCalendarLists = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('get', '/calendar/list', !sendData ? {} : sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch({
                    type: CALENDARCHANCE.CALENDAR_LISTS,
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
