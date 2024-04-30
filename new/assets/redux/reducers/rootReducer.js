import { combineReducers } from 'redux'

import news from './news'
import author from './author'
import flash from './flash'
import noticeDetail from './noticeDetail'
import notice from './notice'
import multi from 'multiRedux/reducers/public'

export default combineReducers(Object.assign({
    news,
    author,
    flash,
    noticeDetail,
    notice,
    multi
}))
