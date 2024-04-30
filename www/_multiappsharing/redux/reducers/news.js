import { combineReducers } from 'redux'
import {
    GETMORENEWS,
    GETNEWSLIST,
    GETHOTNEWS,
    GETNEWSCHANNELID,
    GETAUTHORINFO,
    GETAUTHORLIST,
    GETFEATURELIST,
    GETMOREFEATURELIST,
    GET24HNEWSLIST
} from '../constants/news'

/** @desc 新闻列表 */
const initNewsList = {
    pageSize: 0,
    recordCount: 0,
    currentPage: 0,
    pageCount: 0,
    currentTime: 0,
    inforList: []
}
const newsList = (state = initNewsList, action) => {
    switch (action.type) {
        case GETNEWSLIST:
            return { ...state, ...action.data }
        case GETMORENEWS:
            const newsList = action.data.inforList
            if (newsList.length !== 0) {
                const newNewsList = state.inforList.concat(action.data.inforList)
                return { ...action.data, inforList: newNewsList }
            } else {
                return state
            }
        default:
            return state
    }
}

/** @desc 新闻导航channelId */
const initStateChannelId = []
const newsChannelId = (state = initStateChannelId, action) => {
    switch (action.type) {
        case GETNEWSCHANNELID:
            let newsChannelId = action.data
            newsChannelId.unshift({
                id: 100,
                channelId: 0,
                channelName: '头条',
                rank: 20,
                updateTime: '',
                createTime: ''
            })
            return newsChannelId
        default:
            return state
    }
}

/** @desc 热门新闻 */
const initHotNewsList = {
    inforList: []
}
const hotNewsList = (state = initHotNewsList, action) => {
    switch (action.type) {
        case GETHOTNEWS:
            return action.data
        default:
            return state
    }
}

/** @desc 24H热门新闻 */
const initHotNews24HList = {
    inforList: []
}
const hot24HNewsList = (state = initHotNews24HList, action) => {
    switch (action.type) {
        case GET24HNEWSLIST:
            return action.data
        default:
            return state
    }
}

/** @desc 作者信息 */
const initStateAuthor = {
    authorInfo: {
        newsCount: 0,
        followCount: 0,
        totalReadCounts: 0,
        infolist: [],
        ifCollect: 0,
        passportId: '',
        nickName: '',
        iconUrl: '',
        introduce: '',
        vGrade: 0
    },
    authorList: {
        inforList: []
    }
}

const author = (state = initStateAuthor, action) => {
    switch (action.type) {
        case GETAUTHORINFO:
            return { ...state, authorInfo: action.data }
        case GETAUTHORLIST:
            return { ...state, authorList: action.data }
        default:
            return state
    }
}

/** @desc 专题列表 */
const initFeatureList = {
    pageSize: 0,
    recordCount: 0,
    currentPage: 0,
    pageCount: 0,
    inforList: []
}
const featureList = (state = initFeatureList, action) => {
    switch (action.type) {
        case GETFEATURELIST:
            return action.data
        case GETMOREFEATURELIST:
            let obj = action.data
            obj.inforList = state.inforList.concat(action.data.inforList)
            return obj
        default:
            return state
    }
}

export default combineReducers({
    newsList,
    hotNewsList,
    newsChannelId,
    author,
    featureList,
    hot24HNewsList
})
