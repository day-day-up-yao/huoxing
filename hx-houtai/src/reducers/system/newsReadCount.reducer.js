/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {NEWSREADCOUNT} from '../../constants/index'

const newsReadCountInfo = (state = {search: {'status': '', 'nickName': '', 'title': '', 'type': 'init'}, pageData: {'currPage': 1, 'pageSize': 20, 'totalCount': 0}, query: {}, list: [], userInfo: {'name': '', 'pwd': ''}, info: {}, replyList: []}, action) => {
    let _query = state.query
    let _userInfo = state.userInfo
    let _list = state.list
    let _replyList = state.replyList
    let search = state.search
    let pageData = state.pageData
    switch (action.type) {
        case NEWSREADCOUNT.ADD_DATA:
            return {...state, ...action.data}
        case NEWSREADCOUNT.ADD_QUERY:
            return {...state, query: {..._query, ...action.data}}
        case NEWSREADCOUNT.SET_SEARCH_QUERY:
            return {...state, search: {...search, ...action.data}}
        case NEWSREADCOUNT.SET_PAGE_DATA:
            return {...state, pageData: {...pageData, ...action.data}}
        case NEWSREADCOUNT.EDIT_USER_INFO:
            return {...state, userInfo: {..._userInfo, ...action.data}}
        case NEWSREADCOUNT.EDIT_LIST_ITEM:
            let _thisItem = _list[action.index]
            return {
                ...state,
                list: [
                    ..._list.slice(0, action.index), {
                        ..._thisItem,
                        ...action.data
                    },
                    ..._list.slice(action.index + 1)]
            }
        case NEWSREADCOUNT.DEL_LIST_ITEM:
            return {...state, list: [..._list.slice(0, action.index), ..._list.slice(action.index + 1)]}
        case NEWSREADCOUNT.DEL_REPLY_LIST:
            return {...state, replyList: [..._replyList.slice(0, action.index), ..._replyList.slice(action.index + 1)]}
        default:
            return state
    }
}

export default newsReadCountInfo
