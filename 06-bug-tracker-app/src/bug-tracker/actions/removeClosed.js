function removeClosed(bugs) {
    const closedBugs = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_BUGS', payload: closedBugs };
    return action;
}
export default removeClosed;