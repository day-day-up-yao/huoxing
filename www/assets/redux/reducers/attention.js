import {
    ISATTENTION
} from '../constants/live'

const initState = {
    list: [],
    marketList: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case ISATTENTION:
            return { ...state, list: action.data }
        default:
            return state
    }
}
