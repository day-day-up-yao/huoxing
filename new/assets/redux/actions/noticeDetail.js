import { axiosAjax } from 'multiPublic/index'
import {
    GETNOTICEDETAIL
} from '../constants/noticeDetail'
import { ACTIONERROR } from 'multiRedux/constants/public'

/**
 * @desc 交易所公告详情
 * @Params {params} params = {noticeId 公告id}
 */
export const getNoticeIdDetail = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'GET',
                url: '/info/notice/one',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETNOTICEDETAIL,
                    data: data.obj
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: ACTIONERROR,
                data: err
            })
            throw new Error(err)
        }
    }
}
