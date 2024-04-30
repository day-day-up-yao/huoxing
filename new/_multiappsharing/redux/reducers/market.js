import { combineReducers } from 'redux'
import { GETRISEDROPDATA, GETSEARCHMARKETDATA } from '../constants/market'

/** @desc 行情涨跌幅 */
const initRiseDrop = {
    pageSize: 0,
    recordCount: 0,
    currentPage: 1,
    pageNum: 0,
    inforList: []
}
const riseDrop = (state = initRiseDrop, action) => {
    switch (action.type) {
        case GETRISEDROPDATA:
            return action.data
        case GETSEARCHMARKETDATA:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    riseDrop
})
