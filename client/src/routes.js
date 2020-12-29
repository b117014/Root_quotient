import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { history } from './_Api/location';

import {connect} from 'react-redux'
import { UserRegisterPage } from './UserRegisterPage/UserRegisterPage';
import { HomePage } from './HomePage/HomePage';
import { UserLoginPage } from './UserLoginPage/UserLoginPage';
import { QuestionUploadPage } from './QuestionUploadPage/QuestionUploadPage';
import { QuestionListPage } from './QuestionListPage/QuestionListPage';
import { QuestionUpdatePage } from './QuestionUpdatePage/QuestionUpdatePage';
import { AnswerPage } from './AnswerPage/AnswerPage';

const RouterContents = (props)=>{


    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={UserLoginPage} />
                <Route exact path="/register" component={UserRegisterPage} />
                <Route exact path="/question/upload" component={QuestionUploadPage} />
                <Route exact path="/question/update" component={QuestionUpdatePage} />
                <Route exact path="/question/:q_id/answer" component={AnswerPage} />

                <Route eaxct path="/questions" component={QuestionListPage} />

            </Switch>
        </Router>
    )
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

const RouterContent = connect(mapStateToProps,null)(RouterContents)
export {RouterContent}