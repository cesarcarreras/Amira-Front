import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { NotFound } from '../components';
import { Home } from './views/Home';
import { Profile } from './views/Profile';


function AuthApp(){
    return(
        <Switch>
            <Route exact path= "/dashboard/home" component={Home}/>
            <Route exact path= "/dashboard/profile" component={Profile}/>
            <Route exact path= "/dashboard/404" component={NotFound}/>
            <Redirect to="/dashboard/404"/>
        </Switch>
    )
};

export default AuthApp;
