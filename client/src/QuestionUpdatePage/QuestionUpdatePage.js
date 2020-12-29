import React from 'react'
import { QuestionForm } from './QuestionForm'
import { uploadQuestionApi, updateQuestionApi } from '../_Api/question'
import { connect } from 'react-redux'


class QuestionUpdatePage extends React.Component{

    constructor(props){
        super(props)
    }

    onSubmitCallBack = (values)=>{
        const {description,tag,title} = values
        console.log(values)
        updateQuestionApi(this.props.question._id, this.props.user.id, description, tag, title)
            .then(res=>{
                console.log(res.data)
            })
        
    }
    render(){
        return(
            <>
            {this.props.question && (
                <QuestionForm
                onSubmitCallBack={this.onSubmitCallBack}
                question={this.props.question}
                />
            )}
            
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user,
        question: state.question.question
    }
}
QuestionUpdatePage = connect(mapStateToProps, null)(QuestionUpdatePage)
export {QuestionUpdatePage}