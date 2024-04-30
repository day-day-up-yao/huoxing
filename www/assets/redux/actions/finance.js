import { axiosAjax } from 'multiPublic/index'
import {
    GETFINANCELIST,
    GETPRODUCTTYPE,
    GETPRODUCTDETAIL
} from '../constants/finance'
import { ACTIONERROR } from 'multiRedux/constants/public'

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 融资列表
 * @Params {params}
 */
export const getFinancelist = (params) => {
    return async dispatch => {
        try {
            let url = '/info/invest/showInvest'
            const data = await axiosAjax({
                type: 'GET',
                url: url,
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETFINANCELIST,
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
 * @desc 项目类型列表
 * @Params {params}
 */
export const getProductType = (params) => {
    return async dispatch => {
        try {
            let url = '/info/invest/getProjectCategorySet'
            const data = await axiosAjax({
                type: 'GET',
                url: url,
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETPRODUCTTYPE,
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
 * @desc 项目融资详情
 * @Params {params}
 */
export const getPruductDetail = (params) => {
    return async dispatch => {
        try {
            let url = '/info/invest/getInvestProject'
            const data = await axiosAjax({
                type: 'GET',
                url: url,
                params: params
            })
            if (data.code === 1) {
                dispatch({
                    type: GETPRODUCTDETAIL,
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
