import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Menu from '../components/Menu';
import configureStore from '../store';
import {initialState} from '../reducers/app';
import * as types from '../types';
import config from '../../config.local';
import UserForm from '../components/UserForm';
import Contacts from '../components/Contacts';
import Home from '../components/Home';

import '../styles/base/_main.sass';

const state: types.AppState = initialState;
const Store = configureStore(state);

// function Megafon() {
//     return (
//         <Provider store={Store}>
//             <BrowserRouter>
//                 <React.Fragment>
//                     <Menu/>
//                     <Switch>
//                         <Route exact path={`${config.basename}/`} component={Home}/>
//                         <Route exact path={`${config.basename}/contacts`} component={Contacts}/>
//                         <Route exact path={`${config.basename}/user/:userId`} component={UserForm}/>
//                         <Route exact path={`${config.basename}/user/:userId/edit`} component={UserForm}/>
//                         <Route exact path={`${config.basename}/adduser`} component={UserForm}/>
//                     </Switch>
//                 </React.Fragment>
//             </BrowserRouter>
//         </Provider>
//     );
// }
export const Megafon: React.SFC<{}> = () => {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <React.Fragment>
                    <Menu/>
                    <Switch>
                        <Route exact path={`${config.basename}/`} component={Home}/>
                        <Route exact path={`${config.basename}/contacts`} component={Contacts}/>
                        <Route exact path={`${config.basename}/user/:userId`} component={UserForm}/>
                        <Route exact path={`${config.basename}/user/:userId/edit`} component={UserForm}/>
                        <Route exact path={`${config.basename}/adduser`} component={UserForm}/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
}

// export default Megafon;
