import {POST} from '../../constants/index'

const newsNoticeInfo = (state = {
    selectedData: {}
}, action) => {
    let selectedData = state.selectedData
    switch (action.type) {
        case POST.GET_POST_NOTICE_LIST:
            return {...state, selectedData: {...selectedData, ...action.data}}
        default:
            return state
    }
}

export default newsNoticeInfo
