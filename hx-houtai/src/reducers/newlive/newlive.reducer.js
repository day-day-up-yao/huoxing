/**
* Author: wangguodong
* Time: 2021/9/7
* Description: Description
*/
import {NEWLIVE, SELECTEDDATA} from '../../constants/index'

const newliveInfo = (state = {
    selectedData: {},
    filter: {status: '', recommend: '', displayFlag: ''},
    search: {'name': '', 'search': '', 'type': 'init'},
    pageData: {'currPage': 1, 'pageSize': 20, 'totalCount': 0},
    query: {},
    list: [],
    inforList: []
}, action) => {
    let _query = state.query
    let search = state.search
    let pageData = state.pageData
    let filter = status.filter
    let _list = state.list
    switch (action.type) {
        case NEWLIVE.ADD_DATA:
            return {...state, ...action.data}
        case NEWLIVE.ADD_QUERY:
            return {...state, query: {..._query, ...action.data}}
        case NEWLIVE.SET_SEARCH_QUERY:
            return {...state, search: {...search, ...action.data}}
        case NEWLIVE.SET_FILTER_DATA:
            return {...state, filter: {...filter, ...action.data}}
        case NEWLIVE.SET_PAGE_DATA:
            return {...state, pageData: {...pageData, ...action.data}}
        case SELECTEDDATA:
            return {...state, selectedData: action.data}
        case NEWLIVE.EDIT_LIST_ITEM:
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
        case NEWLIVE.DEL_LIST_ITEM:
            return {...state, list: [..._list.slice(0, action.index), ..._list.slice(action.index + 1)]}
        default:
            return state
    }
}

export default newliveInfo
