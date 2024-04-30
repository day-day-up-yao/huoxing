import { axiosAjax } from 'multiPublic/index'
import {
    GETAUTHORNEWS,
    GETAUTHORVIDEO,
    GETAUTHORCOLLECT,
    GETCOLLECTAUTHOR,
    GETAUTHORACHIEVE,
    GETAUTHOR,
    GETAUTHORINFO
} from '../constants/author'
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

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取作者文章
 * @Params {params} params = {status, passportId, token, currentPage, pageSize}
 */
export const getAuthorNews = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/news/showcolumnlist',
                params: Object.assign({
                    status: 1,
                    passportId: '',
                    token: '',
                    currentPage: 1,
                    pageSize: 10
                }, params)
            })
            if (data.code === 1) {
                dispatch({
                    type: GETAUTHORNEWS,
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
 * @desc 获取作者视频
 * @Params {params} params = {currentPage, pageSize, status, passportId}
 */
export const getAuthorVideo = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/video/getuserlist',
                params: Object.assign({
                    currentPage: 1,
                    pageSize: 15,
                    status: 1,
                    passportId: ''
                }, params)
            })
            if (data.code === 1) {
                dispatch({
                    type: GETAUTHORVIDEO,
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
 * @desc 获取作者收藏
 * @Params {params} params = {passportId, token, currentPage, pageSize}
 */
export const getAuthorCollect = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/news/collectlist',
                params: Object.assign({
                    passportId: '',
                    token: '',
                    currentPage: 1,
                    pageSize: 10
                }, params)
            })

            if (data.code === 1) {
                dispatch({
                    type: GETAUTHORCOLLECT,
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
 * @desc 获取作者关注的作者
 * @Params {params} params = {passportid, token}
 */
export const getCollectAuthor = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/follow/author/list',
                params: Object.assign({
                    passportid: '',
                    token: ''
                }, params)
            })
            if (data.code === 1) {
                dispatch({
                    type: GETCOLLECTAUTHOR,
                    data: data.obj
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: GETCOLLECTAUTHOR,
                data: err
            })
            throw new Error(err)
        }
    }
}

/**
 * @desc 作者个人成就
 * @Params pr
 */
export const getAuthorAchieve = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/author/getAuthorAchievement',
                params: {
                    passportId: params.passportId
                }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETAUTHORACHIEVE,
                    data: data.obj
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: GETAUTHORACHIEVE,
                data: err
            })
            throw new Error(err)
        }
    }
}

/**
 * @desc 作者列表
 * @Params getAuthor
 */
export const getAuthor = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/author/showauthorlist',
                params: Object.assign({
                    currentPage: 1,
                    pageSize: 20
                }, params)
            })
            if (data.code === 1) {
                dispatch({
                    type: GETAUTHOR,
                    data: data.obj
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: GETAUTHOR,
                data: err
            })
            throw new Error(err)
        }
    }
}

/**
 * @desc 专栏作者信息
 * @Params getAuthorInfo
 */
export const getAuthorInfo = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/news/getauthorinfo',
                params: Object.assign({
                    passportId: params.passportId
                }, params)
            })
            if (data.code === 1) {
                dispatch({
                    type: GETAUTHORINFO,
                    data: data.obj
                })
            }
            return data
        } catch (err) {
            dispatch({
                type: GETAUTHORINFO,
                data: err
            })
            throw new Error(err)
        }
    }
}
