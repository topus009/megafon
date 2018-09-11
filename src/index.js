import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Megafon from './containers/Megafon';

// let DevTools = '';
// if(process.env.MODE === 'dev') {
//   DevTools = require('mobx-react-devtools');
// }

ReactDOM.render(
    <AppContainer>
        <Megafon/>
    </AppContainer>,
    document.getElementById('root')
);
