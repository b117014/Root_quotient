import axios from 'axios'


function uploadQuestionApi(description,tag,title, user_id){
    return axios.post('/api/question' , {description, title, tag, user_id})
}

function getAllQuestionApi(){
    return axios.get('/api/questions')
}

function updateQuestionApi(q_id, user_id, description, tag, title){
    return axios.put(`/api/question/${q_id}/${user_id}` , {description, title, tag})

}

function removeQuestionApi(q_id){
    return axios.delete(`/api/question/${q_id}`)

}
function getQuestionApi(id){
    return axios.get(`/api/question/${id}`)
}

export {
    uploadQuestionApi,
    getAllQuestionApi,
    updateQuestionApi,
    removeQuestionApi,
    getQuestionApi
}