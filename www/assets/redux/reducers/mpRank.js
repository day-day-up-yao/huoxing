import { GETMPRANKLIST } from '../constants/mpRank'

const initList = {
    rankListObj: {}
}

export default (state = initList, action) => {
    switch (action.type) {
        case GETMPRANKLIST:
            return { ...state, rankListObj: !action.data ? { inforList: [] } : action.data }
        default:
            return state
    }
}
