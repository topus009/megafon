import React from 'react';
import {Route} from 'react-router-dom';
import UserForm from './components/UserForm';
import Contacts from './components/Contacts';
import Home from './components/Home';

const Routes = () =>
    <div>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/user/:userId' component={UserForm}/>
        <Route path='/user/:userId/edit' component={UserForm}/>
        <Route path='/adduser' component={UserForm}/>
    </div>
;

export default Routes;
