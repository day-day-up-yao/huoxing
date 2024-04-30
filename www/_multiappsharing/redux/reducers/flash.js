import { combineReducers } from 'redux'
import { FLASHUPDOWN, GETFLASHLIST, GETMOREFLASH } from '../constants/flash'

/** @desc 快讯列表 */
const initFlashList = {
    pageSize: 0,
    recordCount: 0,
    currentPage: 1,
    pageNum: 0,
    currentTime: new Date(),
    inforList: []
}
const flashList = (state = initFlashList, action) => {
    switch (action.type) {
        case GETFLASHLIST:
            return action.data
        case GETMOREFLASH:
            const flshList = action.data.inforList

            if (flshList.length !== 0) {
                const newFlashList = state.inforList.concat(action.data.inforList)
                return { ...state, inforList: newFlashList }
            } else {
                return state
            }
        case FLASHUPDOWN:
            const upList = state.inforList
            upList.map(function (item, index) {
                if (item.id === action.params.id) {
                    upList[index] = {
                        ...upList[index],
                        upCounts: action.data.upCounts,
                        downCounts: action.data.downCounts,
                        status: action.params.status,
                        type: action.params.status
                    }
                }
            })
            return { ...state, inforList: upList }
        default:
            return state
    }
}

export default combineReducers({
    flashList
})
