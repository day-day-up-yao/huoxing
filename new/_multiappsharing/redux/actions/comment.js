import { axiosAjax } from '../../public'
import { ACTIONERROR } from '../constants/public'
import {
    DELCOMMENT,
    DELREPLY,
    GETNEWSCOMMENT,
    GETNEWSMORECOMMENT,
    REPLYCOMENT
} from '../constants/comment'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 新闻视频评论
 * @Params {params, type} params = {targetId, content, token, userNickName, userId, type:video/news}
 */
export const submitComment = (params) => axiosAjax({
    type: 'get',
    url: '/info/comment/add',
    params: params
})

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 删除评论/回复
 * @Params {params, type} params = {id, token, passportid, idObj为删除回复reducer循环传递ajax不需要}, type: comment评论, reply回复
 */
export const deleteCommentReply = (params, type) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/comment/del',
                params: params
            })

            if (data.code === 1) {
                if (type === 'comment') {
                    dispatch({
                        type: DELCOMMENT,
                        data: params.id
                    })
                } else if (type === 'reply') {
                    dispatch({
                        type: DELREPLY,
                        data: params.idObj
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
 * @desc 回复新闻视频评论
 * @Params {params, type} params = {targetId新闻id, token, userId用户id, userNickName, pid当前评论id, content}
 */
export const replyComment = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/comment/reply',
                params: params
            })

            if (data.code === 1) {
                dispatch({
                    type: REPLYCOMENT,
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
 * @desc 获取新闻评论
 * @Params {params} params = {id, currentPage, pageSize}
 */
export const getNewsComment = (params, type) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/comment/getbyarticle',
                params: params
            })
            if (data.code === 1) {
                if (type === 'more') {
                    dispatch({
                        type: GETNEWSMORECOMMENT,
                        data: data.obj
                    })
                } else {
                    dispatch({
                        type: GETNEWSCOMMENT,
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
