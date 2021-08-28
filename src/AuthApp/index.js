import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


function AuthauthApp(){
    return(
        <Switch>
            <Route exact path= "/dashboard" component={() => <h1>Este es el Dashboard</h1>}/>
            <Redirect to="/dashboard"/>
        </Switch>
    )
};

export default AuthauthApp;