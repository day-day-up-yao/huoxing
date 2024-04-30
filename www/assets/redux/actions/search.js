import { axiosAjax } from 'multiPublic/index'
import { GETMULTISEARCHLIST, GETNEWSSEARCHLIST, GETLIVESEARCHLIST } from '../constants/search'
import { ACTIONERROR } from 'multiRedux/constants/public'
import searchData from '../../public/js/searchData'

const { searchTabTypeEnum } = searchData()

/** ---------------------------------------- pure ajax ---------------------------------------- */

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取多重搜索列表数据（新版多功能搜索）
 * @Params {params}
 * q 搜索关键词 String
 * type 类型 0:全部;1:新闻(标题、摘要和内容搜索); 2:快讯(标题和内容); 3:专栏作者; 4:专题(名称); 5:视频(名称) String
 * page 当前页 Integer
 * pageSize 每页条数 Integer
 * myPassportId passportId(查询专栏作者时候必传) String
 * excellentFlag 精选标识 0：普通搜索，1：精选搜索，默认0, 新版全部传1区分火星号展示数 Integer
 */
export const getMultiSearchList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/news/multisearch'
            const data = await axiosAjax({
                type: 'get',
                url: url,
                formData: false,
                params: params,
                noLoading: true
            })

            if (data.code === 1) {
                let obj = {
                    type: GETMULTISEARCHLIST,
                    data: data.obj,
                    pageType: params.type,
                    pageNum: params.page
                }

                if (params.excellentFlag) {
                    obj.pageType = searchTabTypeEnum.EXCELLENTNEWS
                }

                dispatch(obj)
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
 * @desc 获取新闻搜索
 * @Params {params}
 */
export const getNewsSearchList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/news/search'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                formData: false,
                params: params,
                noLoading: true
            })

            if (data.code === 1) {
                dispatch({
                    type: GETNEWSSEARCHLIST,
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
 * @desc 获取快讯搜索
 * @Params {params}
 */
export const getLiveSearchList = (params) => {
    return async dispatch => {
        try {
            let url = '/info/lives/search'
            const data = await axiosAjax({
                type: 'post',
                url: url,
                formData: false,
                params: params,
                noLoading: true
            })

            if (data.code === 1) {
                dispatch({
                    type: GETLIVESEARCHLIST,
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
