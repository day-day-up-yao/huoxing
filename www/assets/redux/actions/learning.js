import { axiosAjax } from 'multiPublic/index'
import {
    HOTTAGSLIST,
    HOTCOLUMNLIST
} from '../constants/learning'
import { ACTIONERROR } from 'multiRedux/constants/public'
/**
 * @desc 热门标签
 * @Params {params}
 */
export const getTagsData = () => {
    return async dispatch => {
        try {
            let url = '/info/news/getfooterinfo?type=2'
            const data = await axiosAjax({
                type: 'GET',
                url: url,
                params: {},
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: HOTTAGSLIST,
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
 * @desc 热门专题
 * @Params {params}
 */
export const getHotColumn = () => {
    return async dispatch => {
        try {
            let url = '/info/topic/listall?currentPage=1&pageSize=3&position=0'
            const data = await axiosAjax({
                type: 'GET',
                url: url,
                params: {},
                noLoading: true
            })
            if (data.code === 1) {
                dispatch({
                    type: HOTCOLUMNLIST,
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
