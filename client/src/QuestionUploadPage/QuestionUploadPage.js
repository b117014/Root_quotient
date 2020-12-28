import React from 'react'
import { QuestionForm } from './QuestionForm'
import { uploadQuestionApi } from '../_Api/question'
import { connect } from 'react-redux'


class QuestionUploadPage extends React.Component{

    constructor(props){
        super(props)
    }

    onSubmitCallBack = (values)=>{
        const {description,tag,title} = values
        console.log(values)
        uploadQuestionApi(description,tag,title, this.props.user.id)
            .then(res=>{
                console.log(res.data)
            })
    }
    render(){
        return(
            <QuestionForm
            onSubmitCallBack={this.onSubmitCallBack}
            />
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}
QuestionUploadPage = connect(mapStateToProps, null)(QuestionUploadPage)
export {QuestionUploadPage}