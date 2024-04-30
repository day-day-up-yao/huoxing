/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {MPRANK} from '../../constants/index'

const mpRankInfo = (state = {
    rankData: {
        inforList: []
    },
    rankType: {},
    rankDetail: {}
}, action) => {
    switch (action.type) {
        case MPRANK.MPRANK_LIST:
            return {...state, rankData: action.data}
        case MPRANK.MPRANK_TYPE:
            return {...state, rankType: action.data}
        case MPRANK.MPRANK_DETAIL:
            return {...state, rankDetail: action.data}
        default:
            return state
    }
}

export default mpRankInfo
