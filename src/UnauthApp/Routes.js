import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Products from './views/Products';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import { NotFound } from '@components';

function UnauthApp(){
    return(
        <Switch>
            <Route exact path= "/login" component={Login}/>
            <Route exact path= "/signup" component={Signup}/>
            <Route exact path= "/Products" component={Products}/>
            <Route exact path= "/404" component={NotFound}/>
            <Route exact path= "/" component={Home}/>
            <Redirect to="/404"/>
        </Switch>
    )
};

export default UnauthApp;