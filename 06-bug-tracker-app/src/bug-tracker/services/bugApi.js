import axios from 'axios';
const serverEndPoint = 'http://localhost:3030/bugs';

function getAll(){
    return axios
        .get(serverEndPoint)
        .then(response => response.data)
}

function save(bugData){
    if (bugData.id === 0){
        return axios
            .post(serverEndPoint, bugData)
            .then(response => response.data)
    } else {
        return axios
            .put(`${serverEndPoint}/${bugData.id}`, bugData)
            .then(response => response.data)
    }
}

function remove(bugData){
    return axios
        .delete(`${serverEndPoint}/${bugData.id}`)
        .then(response => response.data)
}

export default { getAll, save, remove };