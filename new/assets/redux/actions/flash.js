import { axiosAjax } from 'multiPublic/index'
import {
    GETFLASHCHANNEL,
    GETNEWSRANKINGS,
    GETIMPORTANTFLASH,
    GETFLASHDETAILS,
    DETAILSUPORDOWN
} from '../constants/flash'
import { ACTIONERROR } from 'multiRedux/constants/public'
import { flashUpDownAjax } from 'multiRedux/actions/flash'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取快讯频道
 */
export const getFlashChannel = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/lives/channels',
                params: params
            })

            if (data.code === 1) {
                dispatch({
                    type: GETFLASHCHANNEL,
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

/**
 * @desc 获取精选快讯
 * @params params = {tags:2, currentPage, pageSize}
 */
export const getImportantFlash = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/lives/getimportantlives',
                params: params
            })

            if (data.code === 1) {
                dispatch({
                    type: GETIMPORTANTFLASH,
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

/**
 * @desc 获取新闻排行
 * @params params = {lastDays:3, readCounts:50, newsCounts:10}
 */
export const getNewsRankings = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/recommend',
                params: params
            })

            if (data.code === 1) {
                dispatch({
                    type: GETNEWSRANKINGS,
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

/**
 * @desc 获取快讯详情
 * @params params = {id快讯ID, passportid}
 */
export const getFlashDetails = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/lives/getbyid',
                params: params
            })

            if (data.code === 1) {
                dispatch({
                    type: GETFLASHDETAILS,
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

/**
 * @desc 快讯详情利好利空
 * @params params = {id快讯ID, passportid}
 */
export const getDetailUporDown = (params) => {
    return async dispatch => {
        try {
            const data = await flashUpDownAjax(params)
            if (data.code === 1) {
                dispatch({
                    type: DETAILSUPORDOWN,
                    data: data.obj,
                    params: params
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
