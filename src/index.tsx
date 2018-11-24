import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Megafon} from './containers/Megafon';

const ROOT = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <Megafon/>
    </AppContainer>,
    ROOT
);

if (module.hot) {
    module.hot.accept('./containers/Megafon', () => {
        const NewApp = require('./containers/Megafon').default;
        ReactDOM.render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            ROOT
        );
    });
}
