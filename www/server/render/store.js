import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../../assets/redux/reducers/rootReducer'

import { ACTIONERROR } from 'multiRedux/constants/public'

const errorHandle = store => next => action => {
    if (action.type === ACTIONERROR) {
        return store.getState()
    } else {
        return next(action)
    }
}

export default () => {
    return createStore(rootReducer, {}, compose(applyMiddleware(thunk, errorHandle)))
}
