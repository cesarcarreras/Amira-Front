import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Home, Login, Signup, Checkout, Products, ConfirmPayment} from './views';
import { NotFound } from '@components';

function UnauthApp(){
    return(
        <Switch>
            <Route exact path= "/login" component={Login}/>
            <Route exact path= "/signup" component={Signup}/>
            <Route exact path= "/products" component={Products}/>
            <Route exact path= "/checkout" component={Checkout}/>
            <Route exact path= "/payment-confirmation" component={ConfirmPayment}/>
            <Route exact path= "/404" component={NotFound}/>
            <Route exact path= "/" component={Home}/>
            <Redirect to="/404"/>
        </Switch>
    )
};

export default UnauthApp;