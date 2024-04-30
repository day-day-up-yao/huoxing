import { axiosAjax } from 'multiPublic/index'
import {
    GETNEWSDETAILS,
    GETRECOMMENDNEWS,
    GETRELATEDNEWS,
    GETFEATUREDETAILS,
    GETHOTNEWSVIDEO,
    GETMOREFEATURE
} from '../constants/news'
import { ACTIONERROR } from 'multiRedux/constants/public'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 收藏新闻
 * @Params {params} params = {newsId, passportId, token, status:1收藏-1取消收藏}
 */
export const favoriteNews = (params) => axiosAjax({
    type: 'get',
    url: '/info/news/collect',
    params: params
})

/**
 * @desc 统计新闻访问量
 * @Params {params} params = {id新闻id, ifRecommend}
 */
export const statisticsNews = (params) => axiosAjax({
    type: 'get',
    url: '/info/news/addreadcount',
    params: params
})

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取相关新闻
 * @Params {params} params = {tags新闻相关tags, id新闻id, newsCounts返回数据条数, publishTime发布时间}
 */
export const getRelatedNews = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/relatednews',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETRELATEDNEWS,
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
 * @desc 获取推荐新闻
 * @Params {params} params = {currentPage, pageSize, passportId}
 */
export const getRecommendNews = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/recommend/getplatenews',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETRECOMMENDNEWS,
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
 * @desc 获取新闻详情
 * @Params {params} params = {currentPage, pageSize, channelId}
 */
export const getNewsDetails = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/getbyid',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETNEWSDETAILS,
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
 * @desc 获取专题详情
 * @Params {params, loadType} params = {id, currentPage, pageSize}
 * loadType默认数据还是加载更多,任意字符串如'isMore'
 */
export const getFeatureDetails = (params, loadType) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/topic/info',
                params: params
            })
            if (data.code === 1) {
                if (loadType) {
                    dispatch({
                        type: GETMOREFEATURE,
                        data: data.obj
                    })
                } else {
                    dispatch({
                        type: GETFEATUREDETAILS,
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

// 热点信息列表
export const getHotNewsVideo = (id) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/hot/info',
                params: {
                    infoCounts: 6
                }
            })
            dispatch({
                type: GETHOTNEWSVIDEO,
                data: data.obj
            })
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
