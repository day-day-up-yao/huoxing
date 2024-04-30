/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {POWERZH} from '../../../constants'

const powerGuestInfo = (
    state = {
        pageData: {'page': 1, 'pageSize': 20, 'recordCount': 0},
        activityList: []
    }, action) => {
    switch (action.type) {
        case POWERZH.ACTIVITYLIST:
            return {
                ...state,
                activityList: action.data.inforList.length === 0 ? [] : action.data.inforList
            }
        default:
            return state
    }
}

export default powerGuestInfo
