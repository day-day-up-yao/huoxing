import {POSTACCOUNT} from '../../constants/index'

const postTacticsInfo = (state = {
    pageData: {},
    list: []
}, action) => {
    switch (action.type) {
        case POSTACCOUNT.LIST_POST_TACTICS:
            return {...state,
                list: action.data.inforList,
                pageData: {
                    'currentPage': action.data.currentPage,
                    'recordCount': action.data.recordCount,
                    'pageSize': action.data.pageSize
                }
            }
        default:
            return state
    }
}

export default postTacticsInfo
