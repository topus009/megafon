import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserForm from './components/UserForm';
import Contacts from './components/Contacts';
import Home from './components/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/user/:userId" component={UserForm} />
    <Route exact path="/user/:userId/edit" component={UserForm} />
    <Route exact path="/adduser" component={UserForm} />
  </Switch>
);
export default Routes;
