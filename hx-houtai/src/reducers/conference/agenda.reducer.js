import { AGENDA, SELECTEDDATA } from '../../constants/index'

const agendaInfo = (state = {
    filter: {
        id: 1
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
        case AGENDA.ADD_DATA:
            return {...state, ...action.data}
        case AGENDA.ADD_QUERY:
            return { ...state, query: { ..._query, ...action.data } }
        case AGENDA.SET_SEARCH_QUERY:
            return { ...state, search: { ..._search, ...action.data } }
        case AGENDA.SET_PAGE_DATA:
            return {...state, pageData: {...pageData, ...action.data}}
        case AGENDA.SET_FILTER_DATA:
            return { ...state, filter: { ...filter, ...action.data } }
        case AGENDA.EDIT_LIST_ITEM:
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
        case AGENDA.DEL_LIST_ITEM:
            return {state, list: [..._list.slice(0, action.index), ..._list.slice(action.index + 1)]}
        case SELECTEDDATA:
            return { ...state, selectedData: action.data }
        default:
            return state
    }
}

export default agendaInfo
