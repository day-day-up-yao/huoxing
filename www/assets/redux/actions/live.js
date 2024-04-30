import { axiosAjax } from 'multiPublic/index'
import {
    GETLIVELIST,
    SENDTOCONT,
    PUSHSENDTOCONT,
    LISTRANK,
    ISATTENTION,
    GETROOMBYID,
    GETROOMLIVELIST,
    GETROOMLIVENOWMAINLIST,
    GETROOMPOPULARITY,
    GETROOMLIVERECOMMENDLIST,
    GETROOMLIVETYPELIST,
    GETROOMLIVETYPELISTOBJDATA,
    GETROOMCHATHISTORY,
    SETROLE,
    SETCHATINFO,
    PUSHCURRENTMESSAGELIST,
    GETROOMLIVEUSERPOPULAR,
    PUSHCURRENTTIPSLIST,
    LIVERESET,
    ISSDKREADY
} from '../constants/live'
import { ACTIONERROR } from 'multiRedux/constants/public'
/** ---------------------------------------- pure ajax ---------------------------------------- */
/**
 * @desc 判断用户是否可以在该直播间发言
 * @Params {params} params = {castId: 直播间id, passportId: 用户id}
 */
export const judgeUser = (params) => axiosAjax({
    type: 'post',
    url: '/push/text/caster/room/judge',
    params: params
})
/**
 * @desc 图片上传
 * @Params {params} params = {uploadFiles: 文件流}
 */
export const uploadImg = (params) => axiosAjax({
    type: 'post',
    url: '/mgr/picture/upload',
    contentType: 'multipart/form-data',
    formData: true,
    noLoading: true,
    params: params
})
/**
 * @desc 关注作者
 * @Params {params} params = {passportid: 用户passportId, token: 用户登录令牌, authorId: 被关注者id}
 */
export const attentionAuthor = (params, type) => axiosAjax({
    type: 'post',
    url: type === 0 ? '/info/follow/author/add' : '/info/follow/author/delete',
    params: params
})

/**
 * @desc 市值前4的币在币安的价格
 * @Params {params}
 */
export const getMarket = () => axiosAjax({
    type: 'post',
    noLoading: true,
    url: '/market/tickers/coin/binance/price'
})

/**
 * @desc 直播发送评论
 * @Params {params}
 */
export const liveComentSend = (params) => axiosAjax({
    type: 'post',
    noLoading: true,
    url: '/info/video/live/comment/send',
    params
})

/**
 * @desc 直播详情举报直播间
 * @Params {params}
 */
export const getLiveTipAdd = (params) => axiosAjax({
    type: 'post',
    url: '/info/video/live/tip/add',
    params
})

/**
 * @desc 获取直播间状态
 * @Params {params}
 */
export const getRoomStatus = (params) => axiosAjax({
    type: 'get',
    url: '/info/video/live/getRoomStatus',
    noLoading: true,
    params
})

/**
 * @desc 主持人设置直播间状态
 * @Params {params}
 */
export const setRoomStatus = (params) => axiosAjax({
    type: 'post',
    url: '/info/video/live/status',
    params
})

/**
 * @desc 创建直播间
 * @Params {params}
 */
export const getRoomAdd = (params) => axiosAjax({
    type: 'postpure',
    url: '/info/video/live/room/add',
    params
})

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 直播间详情
 * @Params {params}
 * roomId 获取根据: 直播间id
 */
export const getRoomByID = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/live/getRoomByID'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETROOMBYID,
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
 * @desc 直播间人气（用于详情页人气请求）
 * @Params {params}
 * roomIDs 获取根据: 直播间id
 */
export const getRoomPopularity = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/live/getRoomPopularity'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETROOMPOPULARITY,
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
 * @desc 直播间广场列表
 * @Params {params} 非必传
 * recommendFlag 推荐标识，默认0 1=推荐请求 跟分类平行
 * passportId 主持人账号ID 用户ID（请求自己的列表用）
 * pageSize 每页数量，默认20
 * page 查询页，默认1
 * liveType 直播分类， 默认10000 类型分类 1.全部(默认不传)
 * displayFlag 展示标识 默认1 0.显示隐藏
 * adminCreateFlag 后台创建直播间标识， 默认 1   0=个人中心，跟其他分开
 * main 自己的直播间 判断PC端创建直播间时使用
 */
export const getRoomLiveList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/live/getRoomListPage'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                if (params.recommendFlag) {
                    dispatch({
                        type: GETROOMLIVERECOMMENDLIST,
                        data: data.obj
                    })
                } else if (params.liveType) {
                    dispatch({
                        type: GETROOMLIVETYPELISTOBJDATA,
                        data: data.obj,
                        liveType: params.liveType
                    })
                } else if (params.main) {
                    dispatch({
                        type: GETROOMLIVENOWMAINLIST,
                        data: data.obj,
                        liveType: params.liveType
                    })
                } else {
                    dispatch({
                        type: GETROOMLIVELIST,
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
 * @desc 直播间人气主播列表
 * @Params {params} 非必传
 * pastDays 过去几日，默认7
 * limit 查询数，默认10
 */
export const getRoomLiveUserPopular = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/live/user/popular'
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETROOMLIVEUSERPOPULAR,
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
 * @desc 直播间类型列表
 */
export const getRoomLiveTypeList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/live/type/list?ver=2'
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETROOMLIVETYPELIST,
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
 * @desc 直播间历史聊天记录
 * @Params {params} 非必传
 * roomId 直播间id
 * queryTime 查询时间，首页不用传，翻页传上页最后一条记录createTime
 * pageSize 每页数量，默认20
 * order 0：升序，1：倒序 默认0
 */
export const getRoomChatHistory = (params) => {
    return async dispatch => {
        try {
            let url = '/info/video/live/getChatHistory'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETROOMCHATHISTORY,
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
 * @desc 获取直播列表
 * @Params {params}
 * castId 获取根据: 直播间id
 * orderBy 倒序或者正序 String “asc”/“desc”
 * refreshTime Long 13位时间戳
 * pageSize
 */
export const getLiveList = (params, rank) => {
    return async dispatch => {
        try {
            let url = '/push/text/room/content/list'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params
            })
            if (data.code === 1) {
                if (rank) {
                    dispatch({
                        type: LISTRANK,
                        data: data.data
                    })
                } else {
                    dispatch({
                        type: GETLIVELIST,
                        data: data.data
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
 * @desc 判断是否关注
 * @Params {params} params = {myPassportId: 用户passportId}
 */
export const isAttentionAuthor = (params) => {
    return async dispatch => {
        try {
            let url = '/info/author/follow_passport_ids'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: ISATTENTION,
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
 * @desc 嘉宾发送直播消息
 * @Params {params}
 * castId 直播间id
 * passportId 用户id
 * content 直播内容
 */
export const sendtoCont = (params) => {
    return async dispatch => {
        try {
            let url = '/push/text/caster/sendto'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: SENDTOCONT,
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

// 发送的数据推送到列表
export const pushSendtoCont = (data) => {
    return { type: PUSHSENDTOCONT, data }
}

/**
 * @desc 更改直播间属性
 * @Params {data} 直播间属性
 */
export const changeLiveRoomData = (data) => {
    return { type: GETROOMBYID, data }
}

/**
 * @desc 当前管理的直播间
 * @Params {data} 直播间属性
 */
export const getNowControlRoom = (data) => {
    return { type: GETROOMBYID, data }
}

/* ---------------------tweblive------------------ */
export const setRole = (data) => {
    return { type: SETROLE, data }
}
export const setChatInfo = (data) => {
    return { type: SETCHATINFO, data }
}
export const pushCurrentMessageList = (data) => {
    return { type: PUSHCURRENTMESSAGELIST, data }
}
export const pushCurrentTipsList = (data) => {
    return { type: PUSHCURRENTTIPSLIST, data }
}
export const liveReset = () => {
    return { type: LIVERESET }
}
export const isSdkReady = (data) => {
    return { type: ISSDKREADY, data }
}
