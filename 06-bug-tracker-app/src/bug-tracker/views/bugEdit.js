import React, { useState } from 'react';

const BugEdit = ({ addNew }) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <input type="button" value="Add New" onClick={_ => addNew(newBugName)} />
        </section>
    )
};

export default BugEdit;