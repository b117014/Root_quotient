import React from 'react'
import { QuestionForm } from './QuestionForm'
import { uploadQuestionApi } from '../_Api/question'
import { connect } from 'react-redux'
import Spinner from 'react-spinners/BounceLoader'


class QuestionUploadPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            spinner: false
        }
    }

    onSubmitCallBack = (values)=>{
        const {description,tag,title} = values
        this.setState({spinner: true})
        uploadQuestionApi(description,tag,title, this.props.user.id)
            .then(res=>{
                this.setState({spinner: true})
                this.props.history.push('/questions')
            })
    }
    render(){
        return(
            <>
            {this.state.spinner && (
                    <div className="d-flex justify-content-center">
                    <Spinner
                    
                    />
                    </div>
                )}
            <QuestionForm
            onSubmitCallBack={this.onSubmitCallBack}
            />
            </>
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