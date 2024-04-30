import { combineReducers } from 'redux'

import home from './home'
import live from './live'
import attention from './attention'
import learning from './learning'
import mpRank from './mpRank'
import userCenter from './userCenter'
import video from './video'
import activity from './activity'
import news from './news'
import search from './search'
import login from 'multiRedux/reducers/login'
import multi from 'multiRedux/reducers/public'
import finance from './finance'

export default combineReducers(Object.assign({
    home,
    live,
    attention,
    mpRank,
    learning,
    userCenter,
    video,
    activity,
    search,
    login,
    news,
    multi,
    finance
}))
