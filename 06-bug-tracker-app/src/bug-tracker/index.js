import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';
import bugActionCreators from './actions';

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

function mapStateToProps(storeState){
    const bugs = storeState.bugsData;
    return { bugs : bugs };
}
function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;

}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);
