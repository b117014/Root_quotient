import axios from 'axios'


function uploadAnswerApi(q_id, user_id, answer){
    return axios.post(`/api/answer/${q_id}/${user_id}` , {answer})
}
function removeAnswerApi(a_id, user_id){
    return axios.delete(`/api/answer/${a_id}/${user_id}`)
}
export {
    uploadAnswerApi,
    removeAnswerApi
}