/* const loggerMiddleware = function(store){
    return function (next){
        return function(action){
            console.group(action.type);
            console.log(action);
            console.group('Before')
            console.log(store.getState())
            console.groupEnd();
            next(action);
            console.group('After')
            console.log(store.getState())
            console.groupEnd();
            console.groupEnd();
        }
    }
} */

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log(action);
    console.group('Before')
    console.log(store.getState())
    console.groupEnd();
    next(action);
    console.group('After')
    console.log(store.getState())
    console.groupEnd();
    console.groupEnd();
}

export default loggerMiddleware;