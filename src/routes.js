import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserEditForm from './components/UserEditForm';
import UserAddForm from './components/UserAddForm';
import Contacts from './components/Contacts';
import Megafon from './containers/Megafon';

export default () => (
    <BrowserRouter>
        <div>
            <Route path='/' component={Megafon}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/user/:userId' component={UserInfo}/>
            <Route path='/user/:userId/edit' component={UserEditForm}/>
            <Route path='/adduser' component={UserAddForm}/>
        </div>
    </BrowserRouter>
);
