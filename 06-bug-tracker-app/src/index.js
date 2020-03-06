import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import appStore from './store';
import BugTracker from './bug-tracker';
import Spinner from './spinner'

//without routing
/* ReactDOM.render(
    <Provider store={appStore}>
        <div>
            <h1>My App</h1>
            <hr/>
            <Spinner/>
            <BugTracker/>
        </div>
    </Provider>,
    document.getElementById('root'));
 */

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = (...attrs) => {
    console.log(attrs);
    return (<h1>Home</h1>);
};

ReactDOM.render(
    <Provider store={appStore}>
        <div>
            <h1>My App</h1>
            <hr />
            <Router>
                <div>
                    <span> [ <Link to="/something">Home</Link> ] </span>
                    <span> [ <Link to="/bugs">Bugs</Link> ] </span>
                    <span> [ <Link to="/spinner">Spinner</Link> ] </span>
                </div>
                <hr />
                <Route path="/:data" component={Home} exact />
                <Route path="/bugs" component={BugTracker} />
                <Route path="/spinner" component={Spinner} />
                
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
