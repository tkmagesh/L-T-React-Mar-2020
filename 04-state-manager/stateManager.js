var StateManager = (function(){
    var _currentState = undefined,
        _subscribers = [],
        _reducer = undefined,
        __init_action = '@@INIT/ACTION';

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _subscribers.push(callback);
    }

    function emitChanges(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        emitChanges();
    }

    function createStore(reducer){
        _reducer = reducer;
        _currentState = _reducer(_currentState, __init_action)
        return { getState, subscribe, dispatch };
    }

    return { createStore };
})();