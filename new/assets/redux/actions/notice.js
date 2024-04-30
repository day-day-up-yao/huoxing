import { axiosAjax } from 'multiPublic/index'
import {
    GETNOTICELIST,
    GETBOURSELIST,
    GETBOURSESTATISTICSLIST,
    GETNOTICEDETAIL
} from '../constants/notice'
import { ACTIONERROR } from 'multiRedux/constants/public'

/**
 * @desc 交易所公告列表
 * @Params {params} params = {
 *     exchangeSymbol 交易所标识
 *     type 公告类型
 *     search 查询关键词
 *     queryTime 查询时间
 *     pageSize 查询一页显示数
 * }
 */
export const getNoticeList = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'GET',
                url: '/info/notice/web/list',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETNOTICELIST,
                    data: data
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

/**
 * @desc 交易所信息列表
 * @Params {params} params = {}
 */
export const getBourseList = () => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'GET',
                url: '/info/notice/resource'
            })
            if (data.code === 1) {
                data.obj.exchange.unshift({
                    symbol: '',
                    name: '平台'
                })
                data.obj.type.unshift({
                    id: '',
                    name: '公告类型'
                })
                dispatch({
                    type: GETBOURSELIST,
                    data: data
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

/**
 * @desc 交易所公告列表
 * @Params {params} params = {}
 */
export const getBourseStatisticsList = () => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'GET',
                url: '/info/notice/statistics'
            })
            if (data.code === 1) {
                dispatch({
                    type: GETBOURSESTATISTICSLIST,
                    data: data
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

/**
 * @desc 交易所公告详情
 * @Params {params} params = {noticeId}
 */
export const getNoticeDetail = (params) => {
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
                    data: data
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
