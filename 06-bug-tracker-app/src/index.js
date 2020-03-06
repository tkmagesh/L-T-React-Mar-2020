import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { bindActionCreators } from 'redux';

import appStore from './store';
import BugTracker from './bug-tracker';
import bugActions from './bug-tracker/actions';

import spinnerActionCreators from './spinner/actions';
import Spinner from './spinner'

const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);
const bugActionDispatchers = bindActionCreators(bugActions, appStore.dispatch);

function renderApp() {
    const storeState = appStore.getState();
    const value = storeState.spinnerData;
    const bugs = storeState.bugsData;
    ReactDOM.render(
        <div>
            <h1>My App</h1>
            <hr/>
            <Spinner value={value} {...spinnerActionDispatchers} />
            <BugTracker bugs={bugs} {...bugActionDispatchers} />
        </div>,
        document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);

/* 

function renderApp(){
    
    ReactDOM.render(
        , 
        document.getElementById('root'));

}
renderApp();
appStore.subscribe(renderApp); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
