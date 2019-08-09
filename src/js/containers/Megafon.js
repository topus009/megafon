import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import AppRouter from '../routes';
import configureStore from '../store';
import IntlProvider from '../hoc/IntlProvider';
import { defaultLocale } from '../config/translation';

import '../../styles/base/_main.sass';

const Store = configureStore();
const locale = Store.getState()?.inlt?.locale || defaultLocale;

const Megafon = () => {
  return (
    <Provider store={Store}>
      <IntlProvider key={locale} locale={locale} textComponent={Fragment}>
        <AppRouter />
      </IntlProvider>
    </Provider>
  );
};

export default Megafon;
