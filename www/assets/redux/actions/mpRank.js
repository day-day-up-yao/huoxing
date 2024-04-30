import { axiosAjax } from 'multiPublic/index'
import {
    GETMPRANKLIST
} from '../constants/mpRank'
import { ACTIONERROR } from 'multiRedux/constants/public'
/**
 * @desc 火星排行榜分类
 * @Params {params} params = {}
 */
export const getRankType = () => axiosAjax({
    type: 'GET',
    url: '/info/rank/type'
})
/**
 * @desc 火星排行榜时间
 * @Params {params} params = {firstType, secondType}
 */
export const getRankMonth = (params) => axiosAjax({
    type: 'GET',
    url: '/info/rank/month/list',
    params: params
})

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 火星排行榜
 * @Params {params}
 * firstType 1级分类
 * secondType 2级分类
 * rankMonth 排行榜时间戳13位（榜单月份1号0点0分0秒）
 */
export const getMpRankList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/rank/msg'
            const data = await axiosAjax({
                type: 'GET',
                url: url,
                params: params,
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: GETMPRANKLIST,
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
