import { CONFERENCELIST } from '../../constants/index'

const conferenceInfo = (state = [], action) => {
    switch (action.type) {
        case CONFERENCELIST:
            return action.conferenceOptions
        default:
            return state
    }
}

export default conferenceInfo
