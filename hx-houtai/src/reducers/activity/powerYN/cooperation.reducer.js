/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import { POWERYN } from '../../../constants'

const powerGuestInfo = (
    state = {
        pageData: { 'page': 1, 'pageSize': 20, 'recordCount': 0 },
        cooperationList: []
    }, action) => {
    switch (action.type) {
        case POWERYN.COLLABORATELIST:
            return {
                ...state,
                cooperationList: action.data.inforList.length === 0 ? [] : action.data.inforList
            }
        case POWERYN.GUESTSETPAGE:
            return {
                ...state,
                pageData: {
                    pageSize: action.data.pageSize,
                    recordCount: action.data.recordCount,
                    page: action.data.page
                }
            }
        default:
            return state
    }
}

export default powerGuestInfo
