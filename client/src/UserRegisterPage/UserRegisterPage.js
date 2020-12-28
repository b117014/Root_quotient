import React from 'react';

import {connect} from 'react-redux'
import { UserAuth } from '../_redux/action/user';
import {UserRegisterForm} from './UserRegisterForm'
import { userRegisterApi } from '../_Api/user';


class UserRegisterPage extends React.Component{

    onSubmitCallback = (value)=>{
        console.log(value)
        
    }
    componentDidUpdate(){
    
        if(this.props.user.isAuthenticated){
            this.props.history.push('/')
        }
       
    }

    onSubmitCallBack = (values)=>{
        console.log(values)
        const {email,username} = values
        userRegisterApi(email,username)
            .then(res=>{
                this.props.userAdd(res.data)
            })
    }

    render(){
       
        return(
            <UserRegisterForm
            onSubmitCallBack={this.onSubmitCallBack}
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

UserRegisterPage = connect(mapStateToProps, mapStateToDispatch)(UserRegisterPage)
export {UserRegisterPage}