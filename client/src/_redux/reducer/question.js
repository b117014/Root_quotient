import { QUESTION_UPDATE } from "../actionType/actionType"

const DEFAULT_STATE ={
    question:null

}

const questionReducer =  (state=DEFAULT_STATE, action)=>{

     switch(action.type){
         case QUESTION_UPDATE: 
                return{
                    ...state,
                    question: action.data,
                    
                }
         default:
              return{
                ... state
         }
     }
}
export {questionReducer}
