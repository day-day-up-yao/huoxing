import {
    GETNEWSRANKINGS,
    GETFLASHCHANNEL,
    GETIMPORTANTFLASH,
    GETFLASHDETAILS,
    DETAILSUPORDOWN
} from '../constants/flash'

const initState = {
    flashChannel: [],
    flashImportant: {
        inforList: []
    },
    flashDetails: {},
    newsRankings: {
        inforList: []
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETFLASHCHANNEL:
            return { ...state, flashChannel: action.data }
        case GETIMPORTANTFLASH:
            return { ...state, flashImportant: action.data }
        case GETNEWSRANKINGS:
            return { ...state, newsRankings: action.data }
        case GETFLASHDETAILS:
            return { ...state, flashDetails: action.data }
        case DETAILSUPORDOWN:
            const newDetails = { ...state.flashDetails, ...action.data, type: action.params.status }
            return { ...state, flashDetails: newDetails }
        default:
            return state
    }
}
