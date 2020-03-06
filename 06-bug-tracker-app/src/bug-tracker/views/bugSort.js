import React from 'react';

const BugSort = () => (
    <section className="sort">
        <label htmlFor="">Order By :</label>
        <select>
            <option value=""></option>
            <option value=""></option>
        </select>
        <label htmlFor="">Descending ? :</label>
        <input type="checkbox" />
    </section>
);

export default BugSort;