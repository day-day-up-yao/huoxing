
import { LIVETYPELIST } from '../../constants/index'

const liveTypeListInfo = (state = [], action) => {
    switch (action.type) {
        case LIVETYPELIST:
            return action.typeOptions
        default:
            return state
    }
}

export default liveTypeListInfo
