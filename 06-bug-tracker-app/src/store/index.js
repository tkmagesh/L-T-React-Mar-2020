import { createStore, combineReducers, applyMiddleware } from 'redux';

import { bugsReducer } from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';

import loggerMiddleware from './middlewares/logger';
import asyncMiddleware from './middlewares/asyncMiddleware';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer
});

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));
export default appStore;