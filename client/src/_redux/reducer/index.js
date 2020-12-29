import {combineReducers} from 'redux'
import {UserReducer} from './user'
import { questionReducer } from './question'


const reducer = combineReducers({
            user : UserReducer,
            question: questionReducer
})

export default reducer