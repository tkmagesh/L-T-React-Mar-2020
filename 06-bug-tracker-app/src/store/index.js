import { createStore } from 'redux';

import { bugsReducer } from '../bug-tracker/reducers';

const appStore = createStore(bugsReducer);

export default appStore;