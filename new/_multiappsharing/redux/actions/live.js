import { axiosAjax } from '../../public/index'
import {
    GETRIGHTLIVEPOPULARITYLIST
} from '../constants/live'
import { ACTIONERROR } from '../constants/public'

/** ---------------------------------------- pure ajax ---------------------------------------- */

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 首页右侧直播间人气列表（用来请求列表的人气数据）
 * @Params {params}
 * roomIDs 获取根据: 直播间id
 */
export const getRightLivePopularityList = (params) => {
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
                    type: GETRIGHTLIVEPOPULARITYLIST,
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
