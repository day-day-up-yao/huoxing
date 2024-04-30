/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {ADDATA, SELECTEDDATA} from '../../constants/index'

const adDataInfo = (state = {
    search: {'status': '', 'nickName': '', 'like': '', 'type': 'init'},
    pageData: {'currPage': 1, 'pageSize': 20, 'totalCount': 0},
    pageDetailData: {'currPage': 1, 'pageSize': 20, 'totalCount': 0},
    query: {},
    list: [],
    listDetail: [],
    userInfo: {'name': '', 'pwd': ''},
    info: {},
    selectedData: {},
    replyList: []
}, action) => {
    let _query = state.query
    let _userInfo = state.userInfo
    let _list = state.list
    let _replyList = state.replyList
    let search = state.search
    let pageData = state.pageData
    switch (action.type) {
        case ADDATA.ADD_DATA:
            return {...state, ...action.data}
        case ADDATA.ADD_QUERY:
            return {...state, query: {..._query, ...action.data}}
        case ADDATA.SET_SEARCH_QUERY:
            return {...state, search: {...search, ...action.data}}
        case ADDATA.SET_PAGE_DATA:
            return {...state, pageData: {...pageData, ...action.data}}
        case ADDATA.SET_PAGE_DETAIL_DATA:
            return {...state, pageDetailData: {...pageData, ...action.data}}
        case ADDATA.EDIT_USER_INFO:
            return {...state, userInfo: {..._userInfo, ...action.data}}
        case ADDATA.EDIT_LIST_ITEM:
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
        case ADDATA.DEL_LIST_ITEM:
            return {...state, list: [..._list.slice(0, action.index), ..._list.slice(action.index + 1)]}
        case ADDATA.DEL_REPLY_LIST:
            return {...state, replyList: [..._replyList.slice(0, action.index), ..._replyList.slice(action.index + 1)]}
        case SELECTEDDATA:
            return {...state, selectedData: action.data}
        default:
            return state
    }
}

export default adDataInfo