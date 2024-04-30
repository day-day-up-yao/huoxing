import { HOTTAGSLIST, HOTCOLUMNLIST } from '../constants/learning'

const initList = {
    tagsArr: [],
    hotColumn: []
}
export default (state = initList, action) => {
    switch (action.type) {
        case HOTTAGSLIST:
            return { ...state, tagsArr: action.data.inforList }
        case HOTCOLUMNLIST:
            return { ...state, hotColumn: action.data.inforList }
        default:
            return state
    }
}
