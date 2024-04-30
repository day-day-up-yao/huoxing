import {AUDIT} from '../../constants/index'

const whiteListInfo = (state = {
    whiteList: [],
    list: [],
    pageData: {'currPage': 1, 'pageSize': 20, 'totalCount': 100}
}, action) => {
    switch (action.type) {
        case AUDIT.WHITE_LIST:
            return {...state, whiteList: action.data.inforList}
        case AUDIT.PAGE_DATA:
            return {...state, pageData: {...state.pageData, ...action.data}}
        default:
            return state
    }
}

export default whiteListInfo
