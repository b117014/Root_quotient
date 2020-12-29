import React from'react'
import { getAllQuestionApi, removeQuestionApi, getQuestionApi } from '../_Api/question'
import {QuestionUpdate} from '../_redux/action/question'
import './style.css'
import {connect} from 'react-redux'
import { AnswerPageContent } from './AnswerPageContent'
import { AnswerPageComponent } from './AnswerPageComponent'
import { uploadAnswerApi, removeAnswerApi } from '../_Api/answer'

class AnswerPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:null
        }

    }
    componentDidMount(){
        let {q_id} = this.props.match.params
        console.log(q_id)
        getQuestionApi(q_id)
            .then(res=>{
                console.log(res.data)
                
                this.setState({data:res.data})
            })
    }

    onCheckRightUser = (id)=>{
            if(this.props.user.id === id ){
                return true
            }
            return false
    }

    onUploadAnswer = (data)=>{
            let {q_id} = this.props.match.params

            uploadAnswerApi(q_id, this.props.user.id, data.answer)
                .then(res=>{
                    console.log(res.data);
                })
    }

    onRemoveAnswer = (a_id)=>{
        removeAnswerApi(a_id, this.props.user.id)
            .then(res=>{
                console.log(res.data)
            })
    }
    render(){
        return(
            <div className="container que_">
                {this.state.data && (
                         <AnswerPageComponent
                            onUploadAnswer={this.onUploadAnswer}
                            data={this.state.data}
                            onCheckRightUser={this.onCheckRightUser}
                            onRemoveAnswer={this.onRemoveAnswer}
                     />
                )}
               


            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

function mapStateToDispatch(dispatch){
    return{
        QuestionRedux: (data)=>dispatch(QuestionUpdate(data))
    }
}

AnswerPage = connect(mapStateToProps, mapStateToDispatch)(AnswerPage)

export {AnswerPage}