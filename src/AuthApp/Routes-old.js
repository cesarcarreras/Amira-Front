import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { NotFound } from '../components';
import { Home, Products, Profile } from './views';


function AuthApp(){
    return(
        <Switch>
            <Route exact path= "/dashboard/home" component={Home}/>
            <Route exact path= "/dashboard/profile" component={Profile}/>
            <Route exact path= "/dashboard/products" component={Products}/>
            <Route exact path= "/dashboard/404" component={NotFound}/>
            <Redirect to="/dashboard/404"/>
        </Switch>
    )
};

export default AuthApp;
