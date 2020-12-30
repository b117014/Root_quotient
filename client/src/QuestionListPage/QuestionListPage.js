import React from'react'
import { QuestionCard } from './QuestionCard'
import { getAllQuestionApi, removeQuestionApi } from '../_Api/question'
import {QuestionUpdate} from '../_redux/action/question'
import './style.css'
import {connect} from 'react-redux'
import Spinner from 'react-spinners/BounceLoader'


class QuestionListPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:null,
            spinner: true
        }

    }
    componentDidMount(){
       this.onGetAllQuestion()
    }

    onGetAllQuestion = ()=>{
        getAllQuestionApi()
        .then(res=>{
            console.log(res.data)
            let newData = res.data
            let sortData = []
            for(let i=newData.length-1;i>=0;i--){
                sortData.push(newData[i])
            }
            console.log(sortData)
            this.setState({data:sortData, spinner: false})
        })
    }

    onCheckRightUser = (id)=>{
            if(this.props.user.id === id ){
                return true
            }
            return false
    }

    onUpdateQuestion = (data)=>{
            this.props.history.push(`/question/update`)
            this.props.QuestionRedux(data)
    }

    onRemoveQuestion = (q_id)=>{
        this.setState({ spinner: true})

        removeQuestionApi(q_id)
            .then(res=>{
                this.onGetAllQuestion()

            })
    }
    onChangeRoute = (q_id)=>{
        this.props.history.push(`/question/${q_id}/answer`)
    }
    render(){
        return(
            <div className="">
                 {this.state.spinner && (
                    <div className="d-flex justify-content-center">
                    <Spinner
                    
                    />
                    </div>
                )}
                <div className="d-flex text-center" style={{flexDirection:'column'}}>
                <QuestionCard
                    data={this.state.data}
                    onCheckRightUser={this.onCheckRightUser}
                    onUpdateQuestion={this.onUpdateQuestion}
                    onRemoveQuestion={this.onRemoveQuestion}
                    onChangeRoute={this.onChangeRoute}
                />
                </div>
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

QuestionListPage = connect(mapStateToProps, mapStateToDispatch)(QuestionListPage)

export {QuestionListPage}