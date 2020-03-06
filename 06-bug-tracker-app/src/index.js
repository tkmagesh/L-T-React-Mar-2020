import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import appStore from './store';
import BugTracker from './bug-tracker';
import Spinner from './spinner'

function renderApp() {
    

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
