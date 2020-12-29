import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
    description: yup.string('It must be string').required('question is required'),
    title:  yup.string('It must be string').required('title is required'),
    tag: yup.string('It must be string').required('tag is required'),
})

class QuestionForm extends React.Component{

    render(){
        return(
            <div>
                <Formik
                    initialValues={{description:this.props.question.description, title:this.props.question.title, tag:this.props.question.tag}}
                    validationSchema={schema}
                    onSubmit={(values)=>this.props.onSubmitCallBack(values)}
                    render={({handleBlur,handleChange,handleSubmit,touched,errors,values})=>(
                        <div className="container mt-5 card">
                        <div className="question-upload p-5 ">
                            <div className="">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <textarea 
                                        type="text"
                                        placeholder="Enter description"
                                        className="form-control"
                                        name="description"
                                        onChange={handleChange('description')}
                                        value={values.description}
                                        onBlur={handleBlur}
                                        row={4}
                                        />
                                    {errors.description && touched.description && (<label className="text-error">{errors.description}</label>)} 

                                    </div>
                                    <div className="answer">
                                        <div className="form-group">
                                            <input 
                                            type="text"
                                            placeholder="enter tag"
                                            className="form-control"
                                            name="tag"
                                            onChange={handleChange('tag')}
                                             value={values.tag}
                                             onBlur={handleBlur}
                                            />
                                        {errors.tag && touched.tag && (<label className="text-error">{errors.tag}</label>)} 

                                        </div>
                                        <div className="form-group">
                                            <input 
                                            type="text"
                                            placeholder="enter title"
                                            className="form-control"
                                            name="title"
                                            onChange={handleChange('title')}
                                             value={values.title}
                                             onBlur={handleBlur}
                                            />
                                            {errors.title && touched.title && (<label className="text-error">{errors.title}</label>)} 

                                        </div>
                                       
                                       
                                    </div>
        
    
                                    <div className="update-btn mt-5">
                                        <button className="btn">Update</button>
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

export {QuestionForm}