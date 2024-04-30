import { axiosAjax } from '../../public'
import { ACTIONERROR } from '../constants/public'
import {
    GETHOTNEWS,
    GETMORENEWS,
    GETNEWSCHANNELID,
    GETNEWSLIST,
    GETAUTHORLIST,
    GETAUTHORINFO,
    GETFEATURELIST,
    GETMOREFEATURELIST,
    GET24HNEWSLIST
} from '../constants/news'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 关注作者
 * @Params {params, type} params = {passportid, token, authorId}, type: delete取消, add关注
 */
export const attentionAuthor = (params, type) => axiosAjax({
    type: 'complexpost',
    url: `/info/follow/author/${type}`,
    params: params,
    noLoading: true
})

/** ---------------------------------------- redux ajax ---------------------------------------- */
/**
 * @desc 获取专题列表
 * @Params {params} params = {currentPage, pageSize, type: 5最新6推荐, identityAuth 不传值是全部-0其他-1媒体-2KOL-3投研-4项目-5行情}
 * @Params {isMore} isMore = 'isMore' 判断是否为移动端加载更多的参数
 */
export const getFeatureList = (params, isMore) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/topic/gettopicpage',
                params: params
            })

            if (isMore) {
                dispatch({
                    type: GETMOREFEATURELIST,
                    data: data.obj
                })
            } else {
                dispatch({
                    type: GETFEATURELIST,
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
 * @desc 获取专题推荐列表
 * @Params {params} params = {currentPage, pageSize}
 */
export const getFeatureRecommendList = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/topic/web/recommend',
                params: params
            })
            dispatch({
                type: GETFEATURELIST,
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

/**
 * @desc 获取作者信息
 * @Params {params} params = {passportId作者id, myPassportId后台通过此参数判断关注与否}
 */
export const getAuthorInfo = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/getauthorinfo',
                params: params
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
                type: ACTIONERROR,
                data: err
            })
            throw new Error(err)
        }
    }
}

/**
 * @desc 获取作者列表
 * @Params {params} params = { type:4, currentPage, pageSize, myPassportId}
 */
export const getAuthorList = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/author/list',
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETAUTHORLIST,
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
 * @desc 获取新闻导航channelId
 */
export const getNewsChannelId = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/channels',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETNEWSCHANNELID,
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
 * @desc 获取热门新闻
 * @Params {params} params = {lastDays, readCounts, newsCounts}
 */
export const getHotNews = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/hotnews',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETHOTNEWS,
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
 * @desc 获取新闻列表
 * @Params {params, urlType, loadType}
 * urlType 获取根据: channel(主页channelId), author(作者详情页authorId), tags(tags与feature页面)
 * loadType默认数据还是加载更多,任意字符串如'more'
 * 对应组件: components/NewsList
 * urlType = channel => params = {currentPage, pageSize, channelId, refreshTime},
 * urlType = author => params = {currentPage, pageSize, passportId, status:1},
 * urlType = tags => params = {currentPage, pageSize, tags},
 */
export const getNewsList = (params, urlType, loadType) => {
    return async dispatch => {
        try {
            let url = ''
            const channelUrl = '/info/news/shownews'
            switch (urlType) {
                case 'author':
                    url = '/info/news/showcolumnlist'
                    break
                case 'tags':
                    url = '/info/news/relatednews1'
                    break
                case 'channel':
                default:
                    url = channelUrl
            }

            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: params
            })

            if (data.code === 1) {
                if (loadType === 'more') {
                    dispatch({
                        type: GETMORENEWS,
                        data: data.obj
                    })
                } else {
                    dispatch({
                        type: GETNEWSLIST,
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
 * @desc 获取24H热门新闻
 * @Params {params} params = {lastDays, readCounts, newsCounts}
 */
export const get24hHotNews = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/news/recommend',
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GET24HNEWSLIST,
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
