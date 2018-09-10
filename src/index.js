import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppRouter from './routes';

// let DevTools = '';
// if(process.env.MODE === 'dev') {
//   DevTools = require('mobx-react-devtools');
// }

ReactDOM.render(
    <AppContainer>
        <AppRouter/>
    </AppContainer>,
    document.getElementById('root')
);
