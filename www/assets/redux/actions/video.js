import Cookies from 'js-cookie'
import { axiosAjax, cookiesName } from 'multiPublic/index'
import {
    GETVIDEOLIST,
    GETVIDEOCONTEXT,
    GETVIDEOLISTBYTAGS,
    GETVIDEORECOMMENDLIST
} from '../constants/video'
import { ACTIONERROR } from 'multiRedux/constants/public'
/** ---------------------------------------- pure ajax ---------------------------------------- */
/**

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取视频列表数据
 * @Params {params} params = {passportids}
 * currentPage 当前页数
 * pageSize 请求数量
 */
export const getVideoList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/getvideolist'
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETVIDEOLIST,
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
 * @desc 获取视频详情数据
 * @Params {params} params = {passportids}
 * id 视频id
 * publishTime 发布时间
 * passportId 用户id
 */
export const getVideoContext = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/getvideocontext'

            const myPassportId = Cookies.get(cookiesName.passportId)
            params.passportId = !myPassportId ? '' : myPassportId

            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETVIDEOCONTEXT,
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
 * @desc 获取 标签相关的 推荐视频列表
 * @Params {params} params = {passportids}
 * name: tags 标签,
 * type: 类型,
 * page: 页数,
 * size: 数量
 */
export const getVideoListByTags = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/get_list_by_tags_v2'

            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETVIDEOLISTBYTAGS,
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
 * @desc 获取推荐视频列表
 * @Params {params} params = {passportids}
 * size: 数量
 */
export const getVideoRecommendList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/recommend_list'

            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETVIDEORECOMMENDLIST,
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
