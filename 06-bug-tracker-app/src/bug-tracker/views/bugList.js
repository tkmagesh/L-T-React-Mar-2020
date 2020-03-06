import React from 'react';
import BugItem from './bugItem';

const BugList = ({ bugs, toggle, removeClosed }) => {
    const bugItems = bugs.map(bug => 
        (<BugItem key={bug.id} bug={bug} toggle={toggle} />));
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={_ => removeClosed()} />
        </section>
    )
}

export default BugList;