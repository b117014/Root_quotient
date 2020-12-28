import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required')
})

class UserLoginForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            
            email:'',
            password:"",
           
           
        }
    }
   
    render(){
        
    return(
        <div>
           <div className="row p-0 ">
                
                <div className="col-lg-5 col-sm-12 p-5 card container ">
                    <div className="container w-75 card-body " >
                        <div className="text-center">
                            <h2 style={{color:'blue'}}>User Login</h2>
                        </div>
                        <Formik
                            initialValues={{email:'', password:null}}
                            validationSchema={schema}
                            onSubmit={(values)=>this.props.onSubmitCallback(values)}
                            render={({handleSubmit, handleChange, handleBlur, errors, touched, values})=>(
                                <form onSubmit={handleSubmit}>
                               
                                        <div className="form-group">
                                            <label>Email: </label>
                                            <input 
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            className='form-control'
                                            placeholder="email"
                                            />
                                           {errors.email && touched.email && (<label className="text-error">{errors.email}</label>)} 
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input 
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            className='form-control'
                                            placeholder="password"
                                            />
                                           {errors.password && touched.password && (<label className="text-error">{errors.password}</label>)} 
                                        </div>
                                    

                                        <div className="update-btn">
                                            <button className="btn" type="submit">Login</button>
                                        </div>
                                    </form>


                            )}
                        />
                            
                    </div>
                </div>
                
            </div>
        </div>
    )
    }
}

export {UserLoginForm}