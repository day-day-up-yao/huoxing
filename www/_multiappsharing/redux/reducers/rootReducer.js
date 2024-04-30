import { combineReducers } from 'redux'

import login from 'multiRedux/reducers/login'
import multi from 'multiRedux/reducers/public'

export default combineReducers(Object.assign({
    login,
    multi
}))
