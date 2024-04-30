import {
    GETAUTHORVIDEO,
    GETAUTHORCOLLECT,
    GETCOLLECTAUTHOR,
    GETAUTHORACHIEVE,
    GETAUTHOR,
    GETAUTHORINFO
} from '../constants/author'

import {
    GETNEWSLIST
} from '../constants/news'

// import { from } from 'rxjs'
const initState = {
    authorVideoList: {
        inforList: []
    },
    authorNewsList: {
        inforList: []
    },
    authorCollectList: {
        inforList: []
    },
    collectAuthor: {
        inforList: []
    },
    authorAchieve: {
        inforList: []
    },
    author: {
        inforList: []
    },
    authorInfo: {
        inforList: []
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETNEWSLIST:
            return { ...state, authorNewsList: action.data }
        case GETAUTHORVIDEO:
            return { ...state, authorVideoList: action.data }
        case GETAUTHORCOLLECT:
            return { ...state, authorCollectList: action.data }
        case GETCOLLECTAUTHOR:
            return { ...state, collectAuthor: action.data }
        case GETAUTHORACHIEVE:
            return { ...state, authorAchieve: action.data }
        case GETAUTHOR:
            return { ...state, author: action.data }
        case GETAUTHORINFO:
            return { ...state, authorInfo: action.data }
        default:
            return state
    }
}
