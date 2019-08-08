import { combineReducers } from 'redux';
import app from './app';
import intl from './intl';
import theme from './theme';

export default combineReducers({
  app,
  intl,
  theme,
});
