import {
    GETNOTICEDETAIL
} from '../constants/noticeDetail'

const initState = {
    noticeObj: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETNOTICEDETAIL:
            console.log(action.data)
            return { ...state, noticeObj: action.data }
        default:
            return state
    }
}
