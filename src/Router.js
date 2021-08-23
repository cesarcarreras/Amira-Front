import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './app/components/home/Home';
import NotFound from './app/components/404/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
