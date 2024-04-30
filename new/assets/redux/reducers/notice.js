import {
    GETNOTICELIST,
    GETBOURSELIST,
    GETBOURSESTATISTICSLIST,
    GETNOTICEDETAIL
} from '../constants/notice'

const initState = {
    noticeObj: {},
    bourseObj: {},
    statisticsObj: {},
    noticeDetailObj: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETNOTICELIST:
            return { ...state, noticeObj: action.data }
        case GETBOURSELIST:
            return { ...state, bourseObj: action.data }
        case GETBOURSESTATISTICSLIST:
            return { ...state, statisticsObj: action.data }
        case GETNOTICEDETAIL:
            return { ...state, noticeDetailObj: action.data }
        default:
            return state
    }
}
