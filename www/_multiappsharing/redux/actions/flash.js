import { axiosAjax } from '../../public'
import { ACTIONERROR } from '../constants/public'
import {
    FLASHUPDOWN,
    GETFLASHLIST,
    GETMOREFLASH
} from '../constants/flash'

/**
 * @desc 获取快讯列表
 * @Params {params} params = {id, passportid, token, status 0:利空; 1:利好}
 */
export const getFlashList = (params, loadType) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/lives/showlives',
                params: params
            })
            if (data.code === 1) {
                if (loadType === 'more') {
                    dispatch({
                        type: GETMOREFLASH,
                        data: data.obj
                    })
                } else {
                    dispatch({
                        type: GETFLASHLIST,
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
 * @desc 获取快讯利好利空
 * @Params {params} params = {id: 快讯id, status: 0利空1利好, passportid, token}
 */
export const flashUpDownAjax = (params) => axiosAjax({
    type: 'post',
    url: '/info/lives/upordown',
    params: params,
    noLoading: true
})
export const getUporDown = (params) => {
    return async dispatch => {
        try {
            const data = await flashUpDownAjax(params)
            if (data.code === 1) {
                dispatch({
                    type: FLASHUPDOWN,
                    data: data.obj,
                    params: params
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
