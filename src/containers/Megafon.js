import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Store from '../Store';
import AppRouter from '../routes';
import Menu from '../components/Menu';

import '../../styles/base/_main.sass';

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
