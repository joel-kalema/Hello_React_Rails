import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from "./redux/greetings/greetings";

const rootReducer = combineReducers({
    greeting: greetingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;