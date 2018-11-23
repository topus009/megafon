import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import config from '../config.local';
import UserForm from './components/UserForm';
import Contacts from './components/Contacts';
import Home from './components/Home';

const Routes = () =>
    <Fragment>
        <Route exact path={`${config.basename}/`} component={Home}/>
        <Route exact path={`${config.basename}/contacts`} component={Contacts}/>
        <Route exact path={`${config.basename}/user/:userId`} component={UserForm}/>
        <Route exact path={`${config.basename}/user/:userId/edit`} component={UserForm}/>
        <Route exact path={`${config.basename}/adduser`} component={UserForm}/>
    </Fragment>
;

export default Routes;
