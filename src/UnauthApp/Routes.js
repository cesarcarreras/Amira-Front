import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';

function UnauthApp(){
    return(
        <Switch>
            <Route exact path= "/login" component={Login}/>
            <Route exact path= "/signup" component={Signup}/>
            <Route exact path= "/" component={Home}/>
            <Redirect to="/login"/>
        </Switch>
    )
};

export default UnauthApp;