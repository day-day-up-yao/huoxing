import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from '../assets/redux/reducers/rootReducer'

import { ACTIONERROR } from 'multiRedux/constants/public'

const errorHandle = store => next => action => {
    if (action.type === ACTIONERROR) {
        return store.getState()
    } else {
        return next(action)
    }
}

export default (windowState) => {
    const initialState = windowState || {}
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, errorHandle)))
}
