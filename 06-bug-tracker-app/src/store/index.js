import { createStore, combineReducers } from 'redux';

import { bugsReducer } from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer
});

const appStore = createStore(rootReducer);
export default appStore;