import axios from 'axios'

function userLoginApi(email,password){
    return axios.post('/api/login', {email, password})
}

function userRegisterApi(email,password){
    return axios.post('/api/register', {email, password})
}

export {
    userLoginApi,
    userRegisterApi
}