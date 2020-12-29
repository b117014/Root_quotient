import { QUESTION_UPDATE } from "../actionType/actionType"

export const QuestionUpdate = (data)=>{
    return{
        type: QUESTION_UPDATE,
        data
    }
}