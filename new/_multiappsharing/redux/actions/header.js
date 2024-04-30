import { axiosAjax } from '../../public'
import { ACTIONERROR } from '../constants/public'
import { HEADERCHANNELS } from '../constants/header'

/**
 * @desc 获取头部导航内容
 */
export const getHeaderChannels = (params) => {
    return async dispatch => {
        try {
            const data = await axiosAjax({
                type: 'get',
                url: '/info/news/channels',
                formData: false,
                params: {
                  ...params
                }
            })

            if (data.code === 1) {
                dispatch({
                    type: HEADERCHANNELS,
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
