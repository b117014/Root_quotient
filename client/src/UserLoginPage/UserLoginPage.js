import React from 'react';

import {connect} from 'react-redux'
import { UserLoginForm } from './UserLoginForm';

class UserLoginPage extends React.Component{

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