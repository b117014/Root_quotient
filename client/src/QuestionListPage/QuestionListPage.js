import React from'react'
import { QuestionCard } from './QuestionCard'
import { getAllQuestionApi } from '../_Api/question'


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
                res.data.sort((a,b)=>{
                    return (new Date(a) - new Date(b));
                })
                this.setState({data:res.data})
            })
    }

    render(){
        return(
            <div className="d-flex">
                <QuestionCard
                    data={this.state.data}
                />
            </div>
        )
    }
}

export {QuestionListPage}