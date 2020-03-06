export function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW_BUG') {
        return [...currentState, action.payload];
    }
    if (action.type === 'REPLACE_BUG') {
        const bugToReplace = action.payload;
        return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
    }
    if (action.type === 'REMOVE_BUGS') {
        const bugsToRemove = action.payload;
        return currentState.filter(bug => !bugsToRemove.find(bugToRemove => bugToRemove.id === bug.id));
    }
    return currentState;
}
