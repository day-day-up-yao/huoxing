import {
    GETUSERCENTERAUTHORINFO,
    GETUSERCENTERAUTHORACHIEVEMENT,
    GETUSERCENTERAUTHORSHOWCOLUMNLIST,
    GETUSERCENTERAUTHORVIDEOLIST,
    GETUSERCENTERAUTHORCOLLECTLIST,
    GETUSERCENTERAUTHORFOLLOWLIST
} from '../constants/userCenter'

import { isArray } from 'multiPublic/index'

const initList = {
    // 用户详细信息
    authorInfo: {
        bbsUid: 0,
        bonusPoint: 0,
        iconUrl: '',
        identityAuth: 0,
        introduce: '',
        nickName: '',
        passportId: '',
        realAuth: 0,
        faceAuth: 0,
        registerPlatform: 0,
        role: 0,
        type: 0,
        vGrade: 0,
        weCenterUid: 0,
        weixinName: ''
    },
    // 个人成就
    authorAchievement: {
        authorFollowCounts: 0, // 粉丝数
        authorLikeCounts: 0, // 关注数
        commentBeLikeCounts: 0, // 评论获赞数
        newsBeLikeCounts: 0, // 文章获赞数
        newsCommentCounts: 0, // 新闻评论数
        newsCounts: 0, // 发布文章数
        newsHotCounts: 0, // 新闻热度
        videoBeLikeCounts: 0, // 视频获赞数
        videoCommentCounts: 0, // 视频评论数
        videoCounts: 0, // 发布视频数
        videoHotCounts: 0, // 视频热度
        videoLiveCount: 0 // 直播数？
    },
    // 文章列表
    authorNewsList: {
        currentPage: 1, // 当前页数
        inforList: [], // 列表
        pageCount: 1, // 总页数
        pageSize: 0, // 当前页数数量
        recordCount: 0 // 总数量
    },
    // 视频列表
    authorVideoList: {
        currentPage: 1, // 当前页数
        inforList: [], // 列表
        pageCount: 1, // 总页数
        pageSize: 0, // 当前页数数量
        recordCount: 0 // 总数量
    },
    // 收藏列表
    authorCollectList: {
        currentPage: 1, // 当前页数
        inforList: [], // 列表
        pageCount: 0, // 总页数
        pageSize: 0, // 当前页数数量
        recordCount: 0 // 总数量
    },
    // 关注列表
    authorFollowList: {
        currentPage: 1, // 当前页数
        currentTime: 0, // 当前时间
        inforList: [], // 列表
        pageCount: 1, // 总页数
        pageSize: 0, // 当前页数数量
        recordCount: 0 // 总数量
    }
}

export default (state = initList, action) => {
    switch (action.type) {
        case GETUSERCENTERAUTHORINFO:
            if (isArray(action.data) && action.data.length > 0) {
                return { ...state, authorInfo: action.data[0] }
            } else {
                return state
            }
        case GETUSERCENTERAUTHORACHIEVEMENT:
            return { ...state, authorAchievement: action.data }
        case GETUSERCENTERAUTHORSHOWCOLUMNLIST:
            if (action.data.currentPage > 1) {
                let newsObj = action.data
                newsObj.inforList = state.authorNewsList.inforList.concat(action.data.inforList)
                return { ...state, authorNewsList: newsObj }
            } else {
                return { ...state, authorNewsList: action.data }
            }
        case GETUSERCENTERAUTHORVIDEOLIST:
            if (action.data.currentPage > 1) {
                let videoObj = action.data
                videoObj.inforList = state.authorVideoList.inforList.concat(action.data.inforList)
                return { ...state, authorVideoList: videoObj }
            } else {
                return { ...state, authorVideoList: action.data }
            }
        case GETUSERCENTERAUTHORCOLLECTLIST:
            if (action.data.currentPage > 1) {
                let collectObj = action.data
                collectObj.inforList = state.authorCollectList.inforList.concat(action.data.inforList)
                return { ...state, authorCollectList: collectObj }
            } else {
                return { ...state, authorCollectList: action.data }
            }
        case GETUSERCENTERAUTHORFOLLOWLIST:
            if (action.data.currentPage > 1) {
                let followObj = action.data
                followObj.inforList = state.authorFollowList.inforList.concat(action.data.inforList)
                return { ...state, authorFollowList: followObj }
            } else {
                return { ...state, authorFollowList: action.data }
            }
        default:
            return state
    }
}
