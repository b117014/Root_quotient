import React from'react'

import { AnswerPageContent } from './AnswerPageContent'

class AnswerPageComponent extends React.Component{

    constructor(props){
        super(props)
       
        this.state={
            isVisible:false
        }
    }
   

    
    render(){
        return(
            <div className="container que_">
                <div className="card p-5">
                    <div className="text-center">
                        <h4>{this.props.data.description}</h4>
                    </div>
                   
                    <div className="">
                        <h5>Views: {this.props.data.views}</h5>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={()=>this.setState({isVisible:!this.state.isVisible})}>Add answer</button>

                {this.state.isVisible && (
                    <AnswerPageContent
                        onUploadAnswer={this.props.onUploadAnswer}
                        title="Upload"
                    />
                )}

                        {this.props.isUpdate && (
                            <AnswerPageContent
                            onUploadAnswer={this.props.onUpdateAnswer}
                                title="Update"
                            />
                        )}

                

                <div className="">
                    <div className="text-center">
                        <h3>All User Answers</h3>
                    </div>
                    
                    {this.props.data && this.props.data.answer && this.props.data.answer.map(res=>(
                        <div className="card p-3" key={res._id}>
                                <div className="">
                                    <h6>{res.answer}</h6>
                                </div>
                                <div className="d-flex justify-content-end">
                                    {this.props.onCheckRightUser(res.user) && (
                                        <div>
                                        <button className="btn btn-danger"
                                        onClick={()=>this.props.onRemoveAnswer(res._id)}
                                        >Delete</button>
                                        <button className="btn btn-success"
                                        onClick={()=>this.props.updateForm(res._id)}
                                        >Update</button>
                                        </div>
                                    )}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


export {AnswerPageComponent}