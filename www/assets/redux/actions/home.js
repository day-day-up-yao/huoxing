import Cookies from 'js-cookie'
import axios from 'axios'
import { axiosAjax, cookiesName } from 'multiPublic/index'
import {
    GETDEFITOTALLOCKED,
    GETDEFIMARKETCAP,
    GETDEFIITEMINFO,
    GETADDATA,
    GETADIMGDATA,
    GETADRECOMMEND,
    GETRANKNEWS,
    GETSUBJECT,
    GETVIDEO,
    GETTAGS,
    GETLEFTNEWSCHANNELID,
    GETNEWSHEADLINES,
    GETNEWSHEADLINESMORE,
    GETNEWSTOTALLIST,
    GETNEWSTOTALLISTMORE,
    GETHOMESHOWAUTHORLIST,
    GETEXCHANGERATES,
    GETMARKERQUOTATIONS,
    GETHOMEROOMLIST,
    FESTIVALCLOSE,
    GETELEMNETBANNER,
    GETCOLLECTIONDEATIL
} from '../constants/home'
import { ACTIONERROR } from 'multiRedux/constants/public'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc Defi数据————总锁仓
 */
export const getDefiTotalLocked = () => {
    return async dispatch => {
        try {
            let timestamp = new Date().getTime()
            let url = `/api/explorer/v1/eth/defi/history`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                isDefi: true,
                params: { t: timestamp }
            })
            if (data.data) {
                dispatch({
                    type: GETDEFITOTALLOCKED,
                    data: data.data
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
 * @desc Defi数据————总市值
 */
export const getDefiMarketCap = () => {
    return async dispatch => {
        try {
            let timestamp = new Date().getTime()
            let url = `/api/explorer/v1/eth/defi/marketcap/chart`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                isDefi: true,
                params: { t: timestamp }
            })
            if (data.data) {
                dispatch({
                    type: GETDEFIMARKETCAP,
                    data: data.data
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
 * @desc Defi数据————单项内容
 */
export const getDefiItemInfo = (name) => {
    return async dispatch => {
        try {
            let timestamp = new Date().getTime()
            let url = `/api/explorer/v1/eth/defi/info`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                isDefi: true,
                params: { t: timestamp, name: name }
            })
            if (data.data) {
                dispatch({
                    type: GETDEFIITEMINFO,
                    data: data.data
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
 * @desc 请求首页广告数据
 * @Params {adPlace, type}
 * adPlace 广告类型： 11.首屏顶部滚动推广
 * type 类型
 */
export const getAdData = (params) => {
    return async dispatch => {
        try {
            let url = `/info/ad/showad`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: { adPlace: '1,2,3,5,4,8,9,10,11', type: 1, ...params }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETADDATA,
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
 * @desc 请求首页广告图片数据
 * @Params {adPlace, type}
 * adPlace 广告类型： 11.首屏顶部滚动推广
 * type 类型
 */
export const getAdImgData = (params) => {
  // console.log(params.req)
    return async dispatch => {
        try {
            let url = `/info/ad/v2/showad?type=1`
            const data = await axiosAjax({
                type: 'postpure',
                url: url,
                req: params.req,
                params: [{
                    'adPlace': 3,
                    secondPosition: 10002
                }, { 'adPlace': 1 }, { 'adPlace': 2 }, { 'adPlace': 9 }, { 'adPlace': 10 }, { 'adPlace': 11 }, { 'adPlace': 16 }, { 'adPlace': 17 }, { 'adPlace': 30 }, { 'adPlace': 31 }, { 'adPlace': 32 }]
            })
            if (data.code === 1) {
                dispatch({
                    type: GETADIMGDATA,
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
 * @desc 请求首页精选内容数据
 * @Params {adPlace, type}
 * newsCounts 类型： 4.精选内容
 */
export const getAdRecommend = (params) => {
    return async dispatch => {
        try {
            let url = `/info/news/web_recommend?newsCounts=4`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: { newsCounts: 4, ...params }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETADRECOMMEND,
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
 * @desc 请求新闻排行————最新新闻
 */
export const getRankNews = (params) => {
    return async dispatch => {
        try {
            let url = `/info/news/recommend`
            const data = await axiosAjax({
                type: 'post',
                url: url,
                params: {
                    lastDays: 1,
                    readCounts: 50,
                    newsCounts: 5,
                    ...params
                }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETRANKNEWS,
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
 * @desc 请求最新专题
 */
export const getSubject = (params) => {
    return async dispatch => {
        try {
            let url = `/info/topic/listall`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: { currentPage: 1, pageSize: 10, position: 0, ...params }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETSUBJECT,
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
 * @desc 请求精选视频
 */
export const getVideo = (params) => {
    return async dispatch => {
        try {
            let url = `/info/video/getrecommendlist`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: { count: 5, ...params }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETVIDEO,
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
 * @desc 请求热门标签
 */
export const getTags = (params) => {
    return async dispatch => {
        try {
            let url = `/info/news/getfooterinfo`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: { type: 2, ...params }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETTAGS,
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
 * @desc 请求新闻导航
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
                    type: GETLEFTNEWSCHANNELID,
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
 * @desc 请求新闻头条
 * @Params { time, loadType }
 * time 最后一项的更新时间 publicTime
 * loadType 加载类型 默认false, 加载更多: isMore
 * 移动端hasloading = true, 不用三个小点,用其他形式
 */
export const getNewsHeadlines = (time, loadType, hasLoading, params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'post',
                url: '/info/news/showinfo',
                params: {
                    queryTime: time,
                    pageSize: 20,
                    ...params
                },
                noLoading: false || hasLoading
            })
            if (data.code === 1) {
                if (loadType === 'isMore') {
                    dispatch({
                        type: GETNEWSHEADLINESMORE,
                        data: data.obj
                    })
                } else {
                    dispatch({
                        type: GETNEWSHEADLINES,
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
 * @desc 请求全部新闻
 * @Params { ids }
 * ids 新闻导航数组
 */
export const getNewsTotalList = (ids, params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/showtotalnews',
                params: {
                    currentPage: 1,
                    pageSize: 20,
                    recommend: 1,
                    channelIds: ids.join(','),
                    ...params
                }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETNEWSTOTALLIST,
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
 * @desc 请求单条新闻
 * @Params { id, currPage, pageSize, lastTime }
 * id 新闻导航ID
 * currPage 当前页数
 * pageSize 更新数量
 * lastTime 上一个更新的时间 publishTime
 */
export const getNewsMoreList = (id, currPage, pageSize, lastTime) => {
    return async dispatch => {
        try {
            let obj = {}
            if (typeof lastTime === 'function') {
                obj = {
                    currentPage: !currPage ? 1 : currPage,
                    pageSize: !pageSize ? 25 : pageSize,
                    channelId: (!id || parseInt(id) === 10002) ? 0 : id
                }
            } else {
                obj = {
                    currentPage: !currPage ? 1 : currPage,
                    pageSize: !pageSize ? 25 : pageSize,
                    channelId: (!id || parseInt(id) === 10002) ? 0 : id,
                    refreshTime: lastTime
                }
            }
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/shownews',
                params: obj
            })
            if (data.code === 1) {
                dispatch({
                    type: GETNEWSTOTALLISTMORE,
                    data: data.obj,
                    channelId: id
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
 * @desc 请求首页 热门作者
 */
export const getShowauthorlist = (params) => {
    return async dispatch => {
        try {
            let obj = {
                currentPage: 1,
                pageSize: 40
            }
            let myPassportId = Cookies.get(cookiesName.passportId)
            if (!myPassportId) {
                obj = { ...obj, myPassportId: myPassportId, ...params }
            }

            let url = `/info/author/showauthorlist`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: obj
            })
            if (data.code === 1) {
                dispatch({
                    type: GETHOMESHOWAUTHORLIST,
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
 * @desc 请求当前汇率
 */
export const getExchangeRates = () => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/market/hx24/v1/exchangeRates',
                params: {
                    currency: 'CNY'
                }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETEXCHANGERATES,
                    data: data.data
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
 * @desc 请求货币行情
 */
export const getMarketQuotations = () => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/market/hx24/web/v1/currency/price_rise_multi'
            })
            if (data.code === 1) {
                dispatch({
                    type: GETMARKERQUOTATIONS,
                    data: data.data
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
 * @desc 右侧请求element
 */
export const getelementCollection = (dataobj, eleurl) => {
    return async dispatch => {
        try {
            let bannerv2list = []
            const instance = await axios.create({
                baseURL: eleurl,
                timeout: 15000,
                headers: {
                    'accept-language': 'zh-CN',
                    'content-type': 'application/json',
                    'lang': 'zh-CN',
                    'languagetype': 'zh-CN',
                    'region': 'china',
                    'x-api-key': 'zQbYj7RhC1VHIBdWU63ki5AJKXloamDT',
                    'x-api-sign': '83e145fb2ff828181d5d88eadd6b122e0610638b704c3330bfc9f7f2990748b8.8018.1661934355',
                    'x-query-args': 'AssetBucketCollection'
                }
            })
            await instance({
                method: 'post',
                url: eleurl,
                data: dataobj
            }).then(function (response) {
                if (response.status === 200) {
                    dispatch({
                        type: GETELEMNETBANNER,
                        data: response.data.data
                    })
                }
                bannerv2list = response.data.data
            })
            return bannerv2list // data
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
 * @desc 右侧请求element合集详情
 */
export const getCollectionDetail = (dataobj, eleurl) => {
    return async dispatch => {
        try {
            let bannerv2list = []
            const instance = await axios.create({
                baseURL: eleurl,
                timeout: 15000,
                headers: {
                    'accept-language': 'zh-CN',
                    'content-type': 'application/json',
                    'lang': 'zh-CN',
                    'languagetype': 'zh-CN',
                    'region': 'china',
                    'x-api-key': 'zQbYj7RhC1VHIBdWU63ki5AJKXloamDT',
                    'x-api-sign': '83e145fb2ff828181d5d88eadd6b122e0610638b704c3330bfc9f7f2990748b8.8018.1661934355',
                    'x-query-args': 'AssetBucketCollection'
                }
            })
            await instance({
                method: 'post',
                url: eleurl,
                data: dataobj
            }).then(function (response) {
                if (response.status === 200) {
                    dispatch({
                        type: GETCOLLECTIONDEATIL,
                        data: response.data.data
                    })
                }
                bannerv2list = response.data.data
            })
            return bannerv2list // data
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
 * @desc 请求首页后台可控直播入口
 */
export const getHomeRoomList = () => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/video/live/getHomeRoomList'
            })
            if (data.code === 1) {
                dispatch({
                    type: GETHOMEROOMLIST,
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
 * @desc 关闭节日背景
 * @params {bool}
 */
export const festivalClose = (bool) => ({
    type: FESTIVALCLOSE,
    data: bool
})
