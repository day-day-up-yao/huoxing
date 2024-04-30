import { axiosAjax } from '../../public'
import { ACTIONERROR } from '../constants/public'
import { GETRISEDROPDATA, GETSEARCHMARKETDATA } from '../constants/market'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 获取汇率
 * @return {code, data:{coin_rate:{BTC, ETH}, legal_rate:{CNY, USD}}}
 */
export const getExchangeRate = () => axiosAjax({
    type: 'get',
    url: '/market/coin/financerate'
})

/**
 * @desc 获取汇率2
 */
export const getExchangeRate2 = () => axiosAjax({
    type: 'post',
    url: '/market/tickers/fiatmap'
})

/**
 * @desc 获取行情数据
 * @Params {params} params = {page, size, sort, order, topRank}
 page 当前显示第几页，必传
 size 每页显示记录条数，必传
 search 搜索值，非必传
 order 排序规则，必传，[rank, price, change, volume, turnover_rate, change_1h, change_7d, change_30d]
 sort 排序方式，必传，[asc, desc]
 limit top-n的币，非必传
 topRank 市值前topRank的币参与排序，非必传
 * @return {code, msg, data}
 */
export const getMarketData = (params) => axiosAjax({
    type: 'get',
    url: '/market/tickers/coin/list',
    params: params
})

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 设置涨跌幅state
 * @Params {params} params = {sort, time}
 */
export const getRiseDropData = (params) => {
    return async dispatch => {
        try {
            const data = await getMarketData({
                page: 1,
                size: 10,
                sort: params.sort,
                order: params.order,
                topRank: 50
            })

            if (data.code === 1) {
                dispatch({
                    type: GETRISEDROPDATA,
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
 * @desc 设置搜索行情
 * @Params {params} params = {search}
 */
export const getSearchMarketData = (params) => {
    return async dispatch => {
        try {
            const data = await getMarketData({
                page: 1,
                size: 2000,
                search: params.search,
                order: 'rank',
                sort: 'asc',
                limit: 0
            })

            if (data.code === 1) {
                dispatch({
                    type: GETSEARCHMARKETDATA,
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
