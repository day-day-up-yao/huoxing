import { axiosAjax, formatTime } from '../../public/index'
import {
    GETSHOWLIVESLIST,
    GETCALENDARLIST,
    GETHOOMROOMLIVERECOMMENDLIST,
    GETHOOMROOMLIVETYPELISTOBJDATA,
    GETHOOMROOMLIVELIST,
    HOMELIVEVERIFYPOPUPSHOW
} from '../constants/home'
import { ACTIONERROR } from '../constants/public'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 请求首页右侧7x24H快讯
 */
export const getShowLivesList = (params) => {
    return async dispatch => {
        try {
            let url = `/info/lives/showlives`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: {
                    currentPage: 1,
                    pageSize: 8,
                    ...params
                }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETSHOWLIVESLIST,
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
 * @desc 请求 项目动态（潜伏日历）
 */
export const getCalendarList = (params) => {
    return async dispatch => {
        try {
            let time = new Date().getTime()
            let timeStr = formatTime(time, 'yyyy-MM-dd').replace(/-/g, '/')
            let dateStr = (new Date(timeStr).getTime()) / 1000
            let url = `/info/calendar/getCalendarList`
            const data = await axiosAjax({
                type: 'get',
                url: url,
                params: {
                    queryTime: parseInt(dateStr),
                    pageSize: 8,
                    ...params
                }
            })
            if (data.code === 1) {
                dispatch({
                    type: GETCALENDARLIST,
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
 * queryTime 查询时间，首页传0，翻页传上页最后一条记录createTime
 * pageSize 每页数量，默认20
 * liveType 类型分类 1.全部(默认不传)
 * recommendFlag 1=推荐请求 跟分类平行
 */
export const getHoomRoomLiveList = (params) => {
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
                        type: GETHOOMROOMLIVERECOMMENDLIST,
                        data: data.obj
                    })
                } else if (params.liveType) {
                    dispatch({
                        type: GETHOOMROOMLIVETYPELISTOBJDATA,
                        data: data.obj,
                        liveType: params.liveType
                    })
                } else {
                    dispatch({
                        type: GETHOOMROOMLIVELIST,
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
 * @desc 昵称框是否显示
 * @params {bool}
 */
export const homeLiveVerifyPopupShow = (bool) => ({
    type: HOMELIVEVERIFYPOPUPSHOW,
    data: {
        liveVerify: bool
    }
})
