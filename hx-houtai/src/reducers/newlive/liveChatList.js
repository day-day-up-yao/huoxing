/**
* Author: wangguodong
* Time: 2021/9/7
* Description: Description
*/
import {CHATLIST, SELECTEDDATA} from '../../constants/index'

const liveChatListInfo = (state = {
    selectedData: {},
    list: [],
    inforList: []
}, action) => {
    let _list = state.list
    switch (action.type) {
        case CHATLIST.ADD_DATA:
            return {...state, ...action.data}
        case SELECTEDDATA:
            return {...state, selectedData: action.data}
        case CHATLIST.DEL_LIST_ITEM:
            return {...state, list: [..._list.slice(0, action.index), ..._list.slice(action.index + 1)]}
        default:
            return state
    }
}

export default liveChatListInfo
