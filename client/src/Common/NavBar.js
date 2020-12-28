import React from 'react';
import {connect} from 'react-redux';
import { UserLogout } from '../_redux/action/user';

const NavBars = (props)=>{

    const Logout = ()=>{
            localStorage.clear()
            props.logout()
            window.location.replace('/')
    }
    console.log(props.user.isAuthenticated)
    return(
        <nav>
            <div className='content'>
            
                {!props.isAuthenticated ? (

                    <div className="text-center nav-content">
                    
                       
                        <div className="flex ">
                            <div className="ml-5" ><a style={{color:'white'}} href="/register">Register</a></div>
                            <div className="ml-5"><a style={{color:'white'}} href="/login">Login</a></div>


                        </div>
                     
                        </div>
                   
                     ):( 
                    <div className="flex ">
                        <div className=""><a style={{color:'white'}} href="/question/upload">Upload Question</a></div>
                        <div className="ml-5"><a style={{color:'white'}} href="#" onClick={Logout} >Logout</a></div>

                    </div>
                    )}
                
               
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        user: state.user.user,
        isAuthenticated: state.user.isAuthenticated
        
    }
}

function mapStateToDispatch(dispatch){
    return{
        logout: ()=> dispatch(UserLogout)
    }
}
const NavBar = connect(mapStateToProps, mapStateToDispatch)(NavBars)
export {NavBar}