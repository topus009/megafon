import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppRouter from '../routes';
import Menu from '../components/Menu';
import configureStore from '../store';

import '../styles/base/_main.sass';

const Store = configureStore();

function Megafon() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <div className='wrapper'>
                    <Menu/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default Megafon;
