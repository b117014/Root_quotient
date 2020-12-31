import React from 'react';

import {connect} from 'react-redux'
import { UserAuth } from '../_redux/action/user';
import {UserRegisterForm} from './UserRegisterForm'
import { userRegisterApi } from '../_Api/user';
import { setToken } from '../service/setToken';
import Spinner from 'react-spinners/BounceLoader'


class UserRegisterPage extends React.Component{
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

    onSubmitCallBack = (values)=>{
        this.setState({spinner: true})
        const {email,password} = values
        userRegisterApi(email,password)
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
            <UserRegisterForm
            onSubmitCallBack={this.onSubmitCallBack}
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

UserRegisterPage = connect(mapStateToProps, mapStateToDispatch)(UserRegisterPage)
export {UserRegisterPage}