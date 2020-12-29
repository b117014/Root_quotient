import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
    answer: yup.string('It must be string').required('question is required'),
    
})

class AnswerPageContent extends React.Component{

    render(){
        return(
            <div>
                <Formik
                    initialValues={{answer:''}}
                    validationSchema={schema}
                    onSubmit={(values)=>this.props.onUploadAnswer(values)}
                    render={({handleBlur,handleChange,handleSubmit,touched,errors,values})=>(
                        <div className="container mt-5 card">
                        <div className="question-upload p-5 ">
                            <div className="">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <textarea 
                                        type="text"
                                        placeholder="Enter answer"
                                        className="form-control"
                                        name="answer"
                                        onChange={handleChange('answer')}
                                        value={values.answer}
                                        onBlur={handleBlur}
                                        row={4}
                                        />
                                    {errors.description && touched.description && (<label className="text-error">{errors.description}</label>)} 

                                    </div>
                        
    
                                    <div className="update-btn mt-5">
                                        <button className="btn">Upload</button>
                                    </div>
                                 
                                </form>
                            </div>
                        </div>
                    </div>
                    )}
                />
            </div>
        )
    }
}

export {AnswerPageContent}