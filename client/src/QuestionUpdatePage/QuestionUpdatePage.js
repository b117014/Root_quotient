import React from 'react'
import { QuestionForm } from './QuestionForm'
import { uploadQuestionApi, updateQuestionApi } from '../_Api/question'
import { connect } from 'react-redux'
import Spinner from 'react-spinners/BounceLoader'


class QuestionUpdatePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            spinner: false
        }
    }

    onSubmitCallBack = (values)=>{
        const {description,tag,title} = values
        this.setState({spinner: true})
        console.log(values)
        updateQuestionApi(this.props.question._id, this.props.user.id, description, tag, title)
            .then(res=>{
                console.log(res.data)
                this.setState({spinner: false})
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