import React from 'react';

import {connect} from 'react-redux'
import { UserAuth } from '../_redux/action/user';
import {UserRegisterForm} from './UserRegisterForm'


class UserRegisterPage extends React.Component{

    onSubmitCallback = (value)=>{
        console.log(value)
        
    }
    componentDidUpdate(){
    
        if(this.props.user.isAuthenticated){
            this.props.history.push('/')
        }
       
    }

    render(){
       
        return(
            <UserRegisterForm
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

UserRegisterPage = connect(mapStateToProps, mapStateToDispatch)(UserRegisterPage)
export {UserRegisterPage}