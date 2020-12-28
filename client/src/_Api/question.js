import axios from 'axios'


function uploadQuestionApi(description,tag,title, user_id){
    return axios.post('/api/question' , {description, title, tag, user_id})
}

function getAllQuestionApi(){
    return axios.get('/api/questions')
}

export {
    uploadQuestionApi,
    getAllQuestionApi
}