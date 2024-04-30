import { axiosAjax } from 'multiPublic/index'
import {
    GETUSERCENTERAUTHORINFO,
    GETUSERCENTERAUTHORACHIEVEMENT,
    GETUSERCENTERAUTHORSHOWCOLUMNLIST,
    GETUSERCENTERAUTHORVIDEOLIST,
    GETUSERCENTERAUTHORCOLLECTLIST,
    GETUSERCENTERAUTHORFOLLOWLIST
} from '../constants/userCenter'
import { ACTIONERROR } from 'multiRedux/constants/public'
/** ---------------------------------------- pure ajax ---------------------------------------- */
/**

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取用户/作者 个人信息
 * @Params {params} params = {passportids}
 */
export const getuserCenterInfo = (params) => {
    return async dispatch => {
        try {
            let url = '/passport/account/getuserinfo'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETUSERCENTERAUTHORINFO,
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
 * @desc 获取用户/作者 个人成就
 * @Params {params} params = {passportids}
 */
export const getAuthorAchievement = (params) => {
    return async dispatch => {
        try {
            let url = '/info/author/getAuthorAchievement'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETUSERCENTERAUTHORACHIEVEMENT,
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
 * @desc 获取用户/作者 文章列表
 * @Params {params}
 * passportId 账号id
 * currentPage 当前页
 * pageSize 每页大小
 * status 当前新闻状态 0:草稿箱; 1:审核通过 2:未通过; -1:被删除 4:审核中；10：全部获取
 */
export const getAuthorShowcolumnlist = (params) => {
    return async dispatch => {
        try {
            let url = '/info/news/showcolumnlist'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: Object.assign({
                    status: 1,
                    passportId: '',
                    token: '',
                    currentPage: 1,
                    pageSize: 10
                }, params),
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETUSERCENTERAUTHORSHOWCOLUMNLIST,
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
 * @desc 获取用户/作者 视频列表
 * @Params {params}
 * passportId 账号id
 * currentPage 当前页
 * pageSize 每页大小
 * status 当前新闻状态 0:草稿箱; 1:审核通过 2:未通过; -1:被删除 4:审核中；10：全部获取
 */
export const getAuthorVideolist = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/getuserlist'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: Object.assign({
                    currentPage: 1,
                    pageSize: 15,
                    status: 1,
                    passportId: ''
                }, params),
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETUSERCENTERAUTHORVIDEOLIST,
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
 * @desc 获取用户/作者 收藏列表
 * @Params {params}
 * passportId 账号id
 * currentPage 当前页
 * pageSize 每页大小
 */
export const getAuthorCollectlist = (params) => {
    return async dispatch => {
        try {
            let url = '/info/news/collectlist'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: Object.assign({
                    passportId: '',
                    token: '',
                    currentPage: 1,
                    pageSize: 10
                }, params),
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETUSERCENTERAUTHORCOLLECTLIST,
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
 * @desc 获取用户/作者 关注列表
 * @Params {params}
 * passportid 账号id
 */
export const getAuthorFollowList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/follow/author/list'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: Object.assign({
                    passportid: '',
                    token: '',
                    pageSize: 100
                }, params),
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETUSERCENTERAUTHORFOLLOWLIST,
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
