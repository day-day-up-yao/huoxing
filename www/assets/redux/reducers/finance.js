import {
    GETFINANCELIST,
    GETPRODUCTTYPE,
    GETPRODUCTDETAIL
} from '../constants/finance'

const initState = {
    financeList: [],
    productTypelist: [],
    pruductDetail: {
        brief: '',
        category: '',
        discord: '',
        logoUrl: '',
        projectName: '',
        twitter: '',
        website: '',
        investRaisedList: [],
        reportUrl: ''
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETFINANCELIST:
            return { ...state, financeList: action.data }
        case GETPRODUCTTYPE:
            return { ...state, productTypelist: action.data }
        case GETPRODUCTDETAIL:
            return { ...state, pruductDetail: action.data }
        default:
            return state
    }
}
