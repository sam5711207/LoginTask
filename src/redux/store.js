
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import registerReducer from './reducers/registerReducer'

const reducer = combineReducers({
    registerReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
        ))
)

window.store = store;
export default store;