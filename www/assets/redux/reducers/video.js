import {
    GETVIDEOLIST,
    GETVIDEOCONTEXT,
    GETVIDEOLISTBYTAGS,
    GETVIDEORECOMMENDLIST
} from '../constants/video'
import { formatPublishTime } from 'multiPublic'

const initList = {
    // 视频列表数据
    videoListData: {
        pageSize: 0,
        recordCount: 0,
        currentPage: 0,
        pageCount: 0,
        inforList: []
    },
    // 视频详情
    videoDetail: {
        current: {
            author: '',
            commentCounts: 0,
            content: '',
            coverPic: '',
            createTime: 0,
            createdBy: '',
            hotCounts: 0,
            iconUrl: '',
            id: '',
            nickName: '',
            passportId: '',
            publishTime: 0,
            readCounts: 0,
            role: 0,
            shareLogoPic: '',
            status: 0,
            title: '',
            topOrder: 0,
            updateTime: 0,
            url: '',
            vGrade: 0
        },
        next: {},
        pre: {}
    },
    // 根据标签的推荐视频列表
    videoByTagsListData: {
        pageSize: 0,
        recordCount: 0,
        currentPage: 0,
        pageCount: 0,
        inforList: []
    },
    // 推荐视频列表
    videoRecommendListData: {
        pageSize: 0,
        recordCount: 0,
        currentPage: 0,
        pageCount: 0,
        inforList: []
    }
}

export default (state = initList, action) => {
    switch (action.type) {
        case GETVIDEOLIST:
            if (action.data.currentPage > 1) {
                let videolist = action.data
                if (videolist.inforList.length > 0) {
                    for (let i = 0; i < videolist.inforList.length; i++) {
                        videolist.inforList[i].videoTime = formatPublishTime(videolist.inforList[i].publishTime)
                    }
                }
                videolist.inforList = state.videoListData.inforList.concat(action.data.inforList)
                return { ...state, videoListData: videolist }
            } else {
                let videolist = action.data
                if (videolist.inforList.length > 0) {
                    for (let i = 0; i < videolist.inforList.length; i++) {
                        videolist.inforList[i].videoTime = formatPublishTime(videolist.inforList[i].publishTime)
                    }
                }
                return { ...state, videoListData: videolist }
            }
        case GETVIDEOCONTEXT:
            return { ...state, videoDetail: action.data }
        case GETVIDEOLISTBYTAGS:
            return { ...state, videoByTagsListData: action.data }
        case GETVIDEORECOMMENDLIST:
            return { ...state, videoRecommendListData: action.data }
        default:
            return state
    }
}
