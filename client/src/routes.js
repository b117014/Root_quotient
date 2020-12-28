import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { RegisterPage } from '../component/RegisterPage/RegisterPage';
import { Homepage } from '../component/HomePage/HomePage';
import { history } from '../component/_Api/location/location';

import {connect} from 'react-redux'

const RouterContents = (props)=>{


    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={UserLoginPage} />
                <Route exact path="/register" component={UserRegisterPage} />

            </Switch>
        </Router>
    )
}

function mapStateToProps(state){
    return{
        admin: state.user.user
    }
}

const RouterContent = connect(mapStateToProps,null)(RouterContents)
export {RouterContent}