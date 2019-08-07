import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import AppRouter from '../routes';
import configureStore from '../store';
import Menu from '../components/Menu';

import '../../styles/base/_main.sass';

const history = createBrowserHistory();
const Store = configureStore();

const Megafon = () => {
  return (
    <Provider store={Store}>
      <Router history={history}>
        <Menu />
        <AppRouter />
      </Router>
    </Provider>
  );
};

export default Megafon;
