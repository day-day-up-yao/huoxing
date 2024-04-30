import { TAGSV2, SELECTEDDATA } from '../../constants/index'

const tagsv2 = (state = {
    filter: {
        tagLevel: '',
        tagStatus: ''
    },
    search: {
        'name': '',
        'type': 'init'
    },
    pageData: {
        'currPage': 1,
        'pageSize': 20,
        'totalCount': 0
    },
    query: {},
    list: [],
    selectedData: {}
}, action) => {
    let _query = state.query
    let _list = state.list
    let _search = state.search
    let pageData = state.pageData
    let filter = state.filter
    switch (action.type) {
        case TAGSV2.ADD_DATA:
            return {...state, ...action.data}
        case TAGSV2.ADD_QUERY:
            return { ...state, query: { ..._query, ...action.data } }
        case TAGSV2.SET_SEARCH_QUERY:
            return { ...state, search: { ..._search, ...action.data } }
        case TAGSV2.SET_PAGE_DATA:
            return {...state, pageData: {...pageData, ...action.data}}
        case TAGSV2.SET_FILTER_DATA:
            return { ...state, filter: { ...filter, ...action.data } }
        case TAGSV2.EDIT_LIST_ITEM:
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
        case TAGSV2.DEL_LIST_ITEM:
            return {state, list: [..._list.slice(0, action.index), ..._list.slice(action.index + 1)]}
        case SELECTEDDATA:
            return { ...state, selectedData: action.data }
        default:
            return state
    }
}

export default tagsv2
