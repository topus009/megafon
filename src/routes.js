import React from 'react';
import {Route} from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserEditForm from './components/UserEditForm';
import UserAddForm from './components/UserAddForm';
import Contacts from './components/Contacts';
import Home from './components/Home';

const Routes = () =>
    <div>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/user/:userId' component={UserInfo}/>
        <Route path='/user/:userId/edit' component={UserEditForm}/>
        <Route path='/adduser' component={UserAddForm}/>
    </div>
;

export default Routes;
