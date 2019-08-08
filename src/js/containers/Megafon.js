import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import AppRouter from '../routes';
import configureStore from '../store';
import Menu from '../components/Menu';
import IntlProvider from '../hoc/IntlProvider';
import { defaultLocale } from '../config/translation';

import '../../styles/base/_main.sass';

const history = createBrowserHistory();
const Store = configureStore();

const locale = Store.getState()?.inlt?.locale || defaultLocale;

const Megafon = () => {
  return (
    <Provider store={Store}>
      <IntlProvider key={locale} locale={locale} textComponent={Fragment}>
        <Router history={history}>
          <Menu />
          <AppRouter />
        </Router>
      </IntlProvider>
    </Provider>
  );
};

export default Megafon;
