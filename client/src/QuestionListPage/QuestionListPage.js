import React from'react'
import { QuestionCard } from './QuestionCard'
import { getAllQuestionApi, removeQuestionApi } from '../_Api/question'
import {QuestionUpdate} from '../_redux/action/question'
import './style.css'
import {connect} from 'react-redux'

class QuestionListPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:null
        }

    }
    componentDidMount(){
        getAllQuestionApi()
            .then(res=>{
                console.log(res.data)
                let newData = res.data
                let sortData = []
                for(let i=newData.length-1;i>=0;i--){
                    sortData.push(newData[i])
                }
                console.log(sortData)
                this.setState({data:sortData})
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
        removeQuestionApi(q_id)
            .then(res=>{
                console.log(res.data)
            })
    }
    render(){
        return(
            <div className="d-flex container que_">
                <QuestionCard
                    data={this.state.data}
                    onCheckRightUser={this.onCheckRightUser}
                    onUpdateQuestion={this.onUpdateQuestion}
                    onRemoveQuestion={this.onRemoveQuestion}
                />
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