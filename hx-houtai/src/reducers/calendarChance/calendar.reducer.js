/**
 * Author：liushaozong
 * Time：2019/6/13
 * Description：Description
 */

import {CALENDARCHANCE} from '../../constants/index'

const calendarInfo = (state = {
    calendarList: [],
    pageData: {'currPage': 1, 'pageSize': 20, 'totalCount': 100},
    calendarDetail: {}
}, action) => {
    switch (action.type) {
        case CALENDARCHANCE.CALENDAR_LISTS:
            return {...state, calendarList: action.data.inforList}
        case CALENDARCHANCE.CALENDAR_LIST_DETAIL:
            return {...state, chanceDetail: action.data}
        case CALENDARCHANCE.CHANCE_PAGE_DATA:
            return {...state, pageData: {...state.pageData, ...action.data}}
        default:
            return state
    }
}

export default calendarInfo
