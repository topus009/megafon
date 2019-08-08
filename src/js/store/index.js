import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import setCookieLang from './enhansers/setCookieLang';
import setCookieTheme from './enhansers/setCookieTheme';

const composeEnhancers =
  !PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger, setCookieLang, setCookieTheme))
  );

  module.hot?.accept('../reducers', () => {
    const nextRootReducer = require('../reducers');
    store.replaceReducer(nextRootReducer);
  });
  return store;
}
