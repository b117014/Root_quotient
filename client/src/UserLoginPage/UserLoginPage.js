import React from 'react';

import {connect} from 'react-redux'
import { UserLoginForm } from './UserLoginForm';
import { UserAuth } from '../_redux/action/user';
import { userLoginApi } from '../_Api/user';
import { setToken } from '../service/setToken';

class UserLoginPage extends React.Component{

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
        const {email, password} = values
        userLoginApi(email,password)
            .then(res=>{
                setToken(res.data.token)
                localStorage.setItem('jwtToken', res.data.token)
                this.props.userAdd(res.data)
            })
    }

    render(){
       
        return(
            <UserLoginForm 
            onSubmitCallback={this.onSubmitCallback}
            />
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