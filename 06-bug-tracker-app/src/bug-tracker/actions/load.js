import bugApi from '../services/bugApi';

/* function getBugs(){
    return [
        { id: 1000, name: 'Dummy Bug', isClosed: false, createdAt: new Date() }
    ]
}
 */

 function load(){
    return function(dispatch){
       bugApi
        .getAll()
        .then(function(bugs){
            dispatch({ type: 'LOAD_BUGS', payload: bugs });        
        })
    };
}
export default load;