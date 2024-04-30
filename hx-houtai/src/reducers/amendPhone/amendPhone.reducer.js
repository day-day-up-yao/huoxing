import {AMENDPHONE} from '../../constants/index'
let initState = {
    phoneObj: {}
}
const amendPhoneInfo = (state = initState, action) => {
    let _phoneObj = state.phoneObj
    switch (action.type) {
        case AMENDPHONE.AMENDPHONE_LIST:
            return {...state, phoneObj: {..._phoneObj, ...action.actionData}}
        default:
            return state
    }
}

export default amendPhoneInfo
