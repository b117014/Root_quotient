import React from 'react';

import {connect} from 'react-redux'
import { UserLoginForm } from './UserLoginForm';
import { UserAuth } from '../_redux/action/user';
import { userLoginApi } from '../_Api/user';
import { setToken } from '../service/setToken';
import Spinner from 'react-spinners/BounceLoader'


class UserLoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            spinner: false
        }
    }

    onSubmitCallback = (value)=>{
        console.log(value)
        
    }
    componentDidUpdate(){
    
        if(this.props.user.isAuthenticated){
            this.props.history.push('/')
        }
       
    }
    onSubmitCallback = (values)=>{
        console.log(values)
        this.setState({spinner: true})
        const {email, password} = values
        userLoginApi(email,password)
            .then(res=>{
                setToken(res.data.token)
                localStorage.setItem('jwtToken', res.data.token)
                this.props.userAdd(res.data)
                this.setState({spinner: false})

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
            <UserLoginForm 
            onSubmitCallback={this.onSubmitCallback}
            />
            </>
        )
    }
}

function mapStateToDispatch(dispatch){
    return {
        userAdd: (data)=>dispatch(UserAuth(data))
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}

UserLoginPage = connect(mapStateToProps, mapStateToDispatch)(UserLoginPage)
export {UserLoginPage}