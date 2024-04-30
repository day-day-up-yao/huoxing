/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {LECTURER, SELECTEDDATA} from '../../constants/index'

const lecturerInfo = (
    state = {
        filter: {type: '0'},
        search: {'type': 'init', search: ''},
        pageData: {'page': 1, 'pageSize': 20, 'totalCount': 0},
        query: {},
        list: [],
        info: {},
        replyList: []
    }, action) => {
    let _query = state.query
    let _list = state.list
    let search = state.search
    let pageData = state.pageData
    let filter = state.filter
    switch (action.type) {
        case LECTURER.ADD_DATA:
            return {...state, ...action.data}
        case LECTURER.ADD_QUERY:
            return {...state, query: {..._query, ...action.data}}
        case LECTURER.SET_SEARCH_QUERY:
            return {...state, search: {...search, ...action.data}}
        case LECTURER.SET_PAGE_DATA:
            return {...state, pageData: {...pageData, ...action.data}}
        case LECTURER.SET_FILTER_DATA:
            return {...state, filter: {...filter, ...action.data}}
        case LECTURER.EDIT_LIST_ITEM:
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
        case LECTURER.DEL_LIST_ITEM:
            return {...state, list: [..._list.slice(0, action.index), ..._list.slice(action.index + 1)]}
        case SELECTEDDATA:
            return {...state, selectedData: action.data}
        default:
            return state
    }
}

export default lecturerInfo
