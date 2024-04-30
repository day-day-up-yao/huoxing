/**
 * Author：liushaozong
 * Time：2019/6/13
 * Description：Description
 */

import {CALENDARCHANCE} from '../../constants/index'

const chanceInfo = (state = {
    chanceList: [],
    pageData: {'currPage': 1, 'pageSize': 20, 'totalCount': 100},
    chanceDetail: {}
}, action) => {
    switch (action.type) {
        case CALENDARCHANCE.CHANCE_LISTS:
            return {...state, chanceList: action.data.inforList}
        case CALENDARCHANCE.CHANCE_ADD:
            return {...state, selectedData: action.data}
        case CALENDARCHANCE.CALENDAR_LIST_DETAIL:
            return {...state, chanceDetail: action.data}
        case CALENDARCHANCE.CHANCE_PAGE_DATA:
            return {...state, pageData: {...state.pageData, ...action.data}}
        default:
            return state
    }
}

export default chanceInfo
