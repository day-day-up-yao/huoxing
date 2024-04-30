/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：index actions
 */

import { hashHistory } from 'react-router'
// import $ from 'jquery'
import Cookies from 'js-cookie'
import { axiosAjax, deleteCookies, axiosPost, ajax } from '../public/index'
import { message } from 'antd'

import {
    GAMELIST,
    BREADCRUMB,
    NAVIGATION,
    CHANNELLIST,
    CONFERENCELIST,
    ACTIVITYCITY,
    FLASHTYPELIST,
    LIVETYPELIST,
    GETITEM,
    ALERTLOGIN
} from '../constants/index'
// 登录
export const login = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/account/editor/login', sendData, function (data) {
            // const ua = navigator.userAgent.toLowerCase()
            if (fn) {
                fn(data)
            }
            if (data.code === 1) {
                for (let key in data.obj) {
                    Cookies.set(`hx_${key}`, data.obj[key], {
                        expires: 30
                    })
                }
                Cookies.set('loginStatus', true)
                if (!sendData.loginType) {
                    if (data.obj.role === 4) {
                        hashHistory.push('/push-flash')
                    } else if (data.obj.role === 5) {
                        hashHistory.push('/marsTrip-list')
                    } else if (data.obj.role === 6) {
                        hashHistory.push('/adData-list')
                    } else if (data.obj.role === 7) {
                        hashHistory.push('/college-courseList')
                    // } else if (ua.indexOf('mobile') > -1) {
                    //     hashHistory.push('/mflash-list')
                    } else {
                        hashHistory.push('/')
                    }
                    message.success('登陆成功!')
                } else {
                    dispatch(alertLogin(false))
                    message.success('登陆成功，请刷新页面或重新提交请求!')
                }
            } else {
                message.error(data.msg)
            }
        })
    }
}

/**
 * @desc 获取短信验证码
 * @Params {params} params = {phonenum, countrycode, verifcategory, graphcode}
 */
export const getSmsCode = (params) => new Promise(function (resolve, reject) {
    try {
        axiosPost('/passport/account/getverifcode', params, function (res) {
            resolve(res)
        }, 'qs')
    } catch (err) {
        reject(err)
    }
})

export const getItem = (data) => {
    return {
        type: GETITEM,
        payload: data
    }
}

export const alertLogin = (data) => {
    return {
        type: ALERTLOGIN,
        payload: data
    }
}

// 注销
export const logout = (sendData) => {
    return (dispatch) => {
        // Cookies.set('loginStatus', false)
        // message.success('已注销!')
        // hashHistory.push('/login')
        axiosAjax('post', '/account/editor/logout', sendData, function (data) {
            deleteCookies()
            Cookies.set('loginStatus', false)
            hashHistory.push('/login')
            if (data.code === 1) {
                message.success('已成功注销!')
            } else {
                message.success('已强制注销!')
            }
        })
    }
}

// 首页游戏列表
export const gameList = () => {
    return (dispatch) => {
        axiosAjax('GET', '/sysinfo/gamelist', {}, function (data) {
            if (data.status === 200) {
                const actionData = data.data
                dispatch({
                    type: GAMELIST,
                    actionData
                })
            } else {
                message.error(data.msg)
            }
        })
    }
}

export const breadcrumb = (arr) => {
    return {
        type: BREADCRUMB,
        arr
    }
}

export const navigation = (selectkey, openkey) => {
    return {
        type: NAVIGATION,
        selectkey,
        openkey
    }
}
// 获取大会列表
export const getConferenceList = (fn) => {
    return (dispatch) => {
        const sendData = {currentPage: 1, pageSize: 1000}
        axiosAjax('post', '/power/conferenceList', sendData, function (data) {
            if (data.code === 1) {
                const actionData = data.obj.inforList
                let conferenceOptions = []
                actionData.map((item) => {
                    conferenceOptions.push({
                        id: item.id,
                        label: item.title,
                        agendaDates: item.agendaDates,
                        media_group: item.media_group
                    })
                })
                dispatch({
                    type: CONFERENCELIST,
                    conferenceOptions
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                data.msg && message.error(data.msg)
            }
        })
    }
}

// 获取频道列表
export const getChannelList = (fn) => {
    return (dispatch) => {
        axiosAjax('post', '/news/channel/list', {}, function (data) {
            if (data.code === 1) {
                const actionData = data.obj
                let channelIdOptions = []
                actionData.map((item) => {
                    channelIdOptions.push({
                        disabled: !item.status,
                        label: item.channelName,
                        value: `${item.channelId}`
                    })
                })
                channelIdOptions.unshift({disabled: false, label: '头条', value: '10002'})
                dispatch({
                    type: CHANNELLIST,
                    channelIdOptions
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                data.msg && message.error(data.msg)
            }
        })
    }
}

// 获取快讯频道
export const getTypeList = (fn) => {
    return (dispatch) => {
        axiosAjax('post', '/lives/channel/list', {}, function (data) {
            if (data.code === 1) {
                const actionData = data.obj
                let typeOptions = []
                actionData.map((item) => {
                    typeOptions.push({
                        disabled: !item.status,
                        label: item.channelName,
                        value: `${item.channelId}`
                    })
                })
                dispatch({
                    type: FLASHTYPELIST,
                    typeOptions
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                data.msg && message.error(data.msg)
            }
        })
    }
}

// 获取直播分类列表
export const getliveTypeList = (fn) => {
    return (dispatch) => {
        axiosAjax('get', '/video/live/type/list', {'status': 1, pageSize: 100, page: 1}, function (data) {
            if (data.code === 1) {
                const actionData = data.obj.inforList
                let typeOptions = []
                actionData.map((item) => {
                    typeOptions.push({
                        disabled: !item.status,
                        label: item.name,
                        value: `${item.id}`
                    })
                })
                dispatch({
                    type: LIVETYPELIST,
                    typeOptions
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                data.msg && message.error(data.msg)
            }
        })
    }
}

// 获取城市列表
export const getActivityCityList = (fn) => {
    return (dispatch) => {
        axiosAjax('post', '/activity/getplacelist', {}, function (data) {
            if (data.code === 1) {
                const actionData = data.obj
                let placeListOptions = []
                actionData.map((item) => {
                    if (item.place === 'overseas') {
                        placeListOptions.push({
                            label: '海外',
                            value: item.place
                        })
                    } else if (item.place === 'others') {
                        placeListOptions.push({
                            label: '其他',
                            value: item.place
                        })
                    } else {
                        placeListOptions.push({
                            label: item.place,
                            value: item.place
                        })
                    }
                })
                dispatch({
                    type: ACTIVITYCITY,
                    placeListOptions
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                data.msg && message.error(data.msg)
            }
        })
    }
}

// 获取专题列表
export async function getTopicList (payload, state) {
    const res = await ajax({
        type: 'get',
        url: `/mgr/topic/list`,
        params: { ...payload }
    })
    return res
}

/** @desc -------------------文件上传------------------- */

// 地址图片，base64图片上传
export async function urlImgUpload (payload, state) {
    const res = await ajax({
        type: 'post',
        url: `/mgr/pic/url_upload`,
        params: { data: JSON.stringify(payload) }
    })
    return res
}
// 文件图片上传
export async function fileImgUpload (payload, state) {
    const res = await ajax({
        type: 'post',
        url: `/mgr/picture/upload`,
        formData: true,
        params: payload
    })
    return res
}
// 大文件上传
export async function fileLargeUpload ({ file, fn }, state) {
    const totalSize = file.size // 文件大小
    const blockSize = 1024 * 1024 * 2 // 块大小
    const blockCount = Math.ceil(totalSize / blockSize) // 总块数

    const params = {
        fileName: file.name,
        blockCount: blockCount,
        type: 'video',
        uploadFile: null,
        currIndex: 1,
        uploadId: ''
    }

    const videoUrl = await new Promise(function (resolve, reject) {
        const uploading = async (params) => {
            const start = (params.currIndex - 1) * blockSize
            const end = Math.min(totalSize, start + blockSize)
            const uploadFile = file.slice(start, end)
            params.uploadFile = uploadFile

            let res = await ajax({
                type: 'post',
                url: `/mgr/file/upload`,
                formData: true,
                params: params
            }).catch(function (err) {
                console.log(err)
            })

            // 请求错误或未上传成功，重新上传当前块
            if (!res || (res.code !== 1 && res.code !== 2)) res = await uploading(params)
            // 当前块上传成功，如果当前块currIndex<总块blockCount，继续上传下一块
            if (res.code === 1) {
                params.uploadId = res.obj
                if (params.currIndex < blockCount) {
                    params.currIndex = params.currIndex + 1
                    res = await uploading(params)
                }
            }
            // 全部上传成功，返回视频url
            if (res.code === 2) resolve(res.obj)

            return res
        }

        uploading(params)
    })

    return videoUrl
}
