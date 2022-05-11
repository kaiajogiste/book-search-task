import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Configure routes
import Home from './screens/home';
import Book from './screens/book';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="https://www.amazon.com/s?k=:ID" component={Book}/>
  </Switch>
);
