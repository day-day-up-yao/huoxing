/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../../public/index'
import {FLASH, SELECTEDDATA} from '../../constants/index'
import { message } from 'antd'

export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 帖子列表
export const getFlashList = (type, sendData, fn) => {
    return (dispatch) => {
        let _url = type === 'init' ? '/lives/showlives' : '/post/search'
        axiosAjax('get', _url, !sendData ? {} : sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addFlashData({'list': actionData.inforList || []}))
                dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize, 'currPage': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 帖子详情
export const getFlashItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/lives/getbyid', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addFlashData({'info': actionData}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const getFlashLocalStrorageInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/lives/getbyid', { ...sendData }, function (res) {
            if (res.code === 1) {
                const actionData = {
                    'id': '20220803133527649539',
                    'upCounts': 465,
                    'downCounts': 34,
                    'images': '',
                    'imagesRemark': '',
                    'url': '',
                    'tag': 1,
                    'tagsV2': '',
                    'status': 1,
                    'createdBy': '0132f319eed7442097b090cd56b59bc5',
                    'createdTime': 1659504928000,
                    'content': '<p>【重新复制了周交易量超过700万美元，仅次于BAYC】<a href=\'https: //www.baidu.com\' rel=\'noopener noreferrer\' target=\'_blank\'>Crypto Slam</a>数据显示，以太坊梦幻足球游戏Sorare的NFT交易量在过去7天超过700万美元（约4430 ETH），目前在NFT市场交易量排名第二，仅次于BAYC（约1100万美元）。 据此前报道，Sorare于7月25日宣布与AC米兰足球俱乐部达成多年合作关系，会于今年夏天晚些时候发布2021和2022年意甲冠军NFT卡片。（NFTGators）</p>',
                    'channelId': 0,
                    'updateTime': 1663141905000,
                    'nopassLivesReason': '',
                    'title': '',
                    'align': 0,
                    'apiAdd': 0
                }
                dispatch(addFlashData({ 'info': actionData }))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const addFlashData = (data) => {
    return {type: FLASH.ADD_DATA, data}
}

export const addFlashQuery = (data) => {
    return {type: FLASH.ADD_QUERY, data}
}

export const editFlashUserInfo = (data) => {
    return {type: FLASH.EDIT_USER_INFO, data}
}

export const editFlashList = (data, index) => {
    return {type: FLASH.EDIT_LIST_ITEM, data, index}
}

export const delFlashData = (index) => {
    return {type: FLASH.DEL_LIST_ITEM, index}
}

export const delReplyList = (index) => {
    return {type: FLASH.DEL_REPLY_LIST, index}
}

export const setSearchQuery = (data) => {
    return {type: FLASH.SET_SEARCH_QUERY, data}
}
export const setPageData = (data) => {
    return {type: FLASH.SET_PAGE_DATA, data}
}
