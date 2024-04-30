import {
    GETRIGHTLIVEPOPULARITYLIST
} from '../constants/live'

const initState = {
    // 右侧人气列表
    roomLivePopularityList: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETRIGHTLIVEPOPULARITYLIST:
            return { ...state, roomLivePopularityList: action.data }
        default:
            return state
    }
}
