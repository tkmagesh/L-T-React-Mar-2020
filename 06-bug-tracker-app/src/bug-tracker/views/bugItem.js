import React from 'react';

const BugItem = ({ bug, toggle }) => (
    <li>
        {bug.isClosed ?
            (<span className="bugname closed" onClick={_ => toggle(bug)}>
                {bug.name}
            </span>) : (<span className="bugname" onClick={_ => toggle(bug)}>
                {bug.name}
            </span>)
        }
        <div className="datetime">[{bug.createdAt.toString()}]</div>
        <div>{bug.isClosed.toString()}</div>
    </li>
)

export default BugItem;