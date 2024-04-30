import { axiosAjax } from 'multiPublic/index'
import {
    GETACTIVITYLIST,
    GETACTIVITYRECOMMENDLIST,
    GETACTIVITYPLACELIST,
    GETACTIVITYINFODATA
} from '../constants/activity'
import { ACTIONERROR } from 'multiRedux/constants/public'

/** ---------------------------------------- pure ajax ---------------------------------------- */
/**

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取活动列表
 * @Params {params} params = {passportids}
 * place: 活动举办场地 all:所有场地; 北京:北京场地; 海外:overseas ; 其他:others
 * timeType: 时间类型:1:所有活动; 2:本周 ;3:本月
 * recommend: 1:推荐 ; 0 :不推荐
 * currentPage: 当前页数
 * pageSize: 当页数量，默认20
 */
export const getActivityList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/activity/newlist'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                if (params.recommend === 1) {
                    dispatch({
                        type: GETACTIVITYRECOMMENDLIST,
                        data: data.obj
                    })
                } else {
                    dispatch({
                        type: GETACTIVITYLIST,
                        data: data.obj
                    })
                }
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
 * @desc 获取活动举办地址列表
 */
export const getActivityPlaceList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/activity/getplacelist'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETACTIVITYPLACELIST,
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
 * @desc 获取活动列表
 * @Params {params} params = {passportids}
 * id: 活动id
 */
export const getActivityInfoData = (params) => {
    return async dispatch => {
        try {
            let url = '/info/activity/getbyid'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETACTIVITYINFODATA,
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
