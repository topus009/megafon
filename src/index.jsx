import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Router} from 'react-router';
import Megafon from './components/Megafon';
import AppStore from './Store';

import '../styles/base/_main.sass';

let DevTools = '';
if(process.env.MODE === 'dev') {
  DevTools = require('mobx-react-devtools');
}

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  store: AppStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <AppContainer>
        <Megafon>
          <DevTools/>
        </Megafon>
      </AppContainer>
    </Router>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Megafon', () => {
    renderApp(require('./components/Megafon').default);
  })
}
