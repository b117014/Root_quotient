import React from'react'
import { getAllQuestionApi, removeQuestionApi, getQuestionApi } from '../_Api/question'
import {QuestionUpdate} from '../_redux/action/question'
import './style.css'
import {connect} from 'react-redux'
import { AnswerPageContent } from './AnswerPageContent'
import { AnswerPageComponent } from './AnswerPageComponent'
import { uploadAnswerApi, removeAnswerApi, updateAnswerApi } from '../_Api/answer'
import Spinner from 'react-spinners/BounceLoader'

class AnswerPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:null,
            answer_id: null,
            isUpdate: false,
            spinner: true
        }

    }
    componentDidMount(){
        let {q_id} = this.props.match.params
        
        this.onGetAllQuestion(q_id)
    }

    onGetAllQuestion = (q_id)=>{
        getQuestionApi(q_id)
            .then(res=>{
                console.log(res.data)
                
                this.setState({data:res.data, spinner:false})
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
            this.setState({spinner: true})

            uploadAnswerApi(q_id, this.props.user.id, data.answer)
                .then(res=>{
                    console.log(res.data);
                    this.onGetAllQuestion(q_id)

                })
    }

    onRemoveAnswer = (a_id)=>{
        this.setState({spinner: true})
        let {q_id} = this.props.match.params

        removeAnswerApi(a_id, this.props.user.id)
            .then(res=>{
                console.log(res.data)
                this.onGetAllQuestion(q_id)
            })
    }
    onUpdateAnswer = (answer)=>{
        this.setState({spinner: true})
        let {q_id} = this.props.match.params

        console.log(answer)
        updateAnswerApi(this.state.answer_id, answer.answer)
            .then(res=>{
                console.log(res.data)
                this.onGetAllQuestion(q_id)

            })
    }
    updateForm = (a_id)=>{
        this.setState({answer_id: a_id, isUpdate:!this.state.isUpdate})
    }
    render(){
        return(
            <div className="container que_">
                {this.state.spinner && (
                    <div className="d-flex justify-content-center">
                    <Spinner
                    
                    />
                    </div>
                )}
                {this.state.data && (
                         <AnswerPageComponent
                            onUploadAnswer={this.onUploadAnswer}
                            data={this.state.data}
                            onCheckRightUser={this.onCheckRightUser}
                            onRemoveAnswer={this.onRemoveAnswer}
                            onUpdateAnswer={this.onUpdateAnswer}
                            updateForm={this.updateForm}
                            isUpdate={this.state.isUpdate}
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