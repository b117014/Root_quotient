import React from 'react'
import { QuestionForm } from './QuestionForm'


class QuestionUploadPage extends React.Component{

    constructor(props){
        super(props)
    }

    onSubmitCallBack = (values)=>{
        const {question,tag,title} = values
        console.log(values)
    }
    render(){
        return(
            <QuestionForm
            onSubmitCallBack={this.onSubmitCallBack}
            />
        )
    }
}

export {QuestionUploadPage}