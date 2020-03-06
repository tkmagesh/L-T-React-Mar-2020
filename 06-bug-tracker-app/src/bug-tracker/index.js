import React, { Component } from 'react';
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';

class BugTracker extends Component {
    render = () => {
        const { bugs, addNew, toggle, removeClosed } = this.props;
        return (
            <>
                <h3>Bug Tracker</h3>
                <hr/>
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, removeClosed }} />
            </>
        )
    }
}

export default BugTracker;
