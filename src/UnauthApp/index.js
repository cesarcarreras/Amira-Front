import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';

function UnauthApp(){
    return(
        <Switch>
            <Route exact path= "/" component={Login}/>
            <Route exact path= "/signup" component={Signup}/>
            <Redirect to="/"/>
        </Switch>
    )
};

export default UnauthApp;