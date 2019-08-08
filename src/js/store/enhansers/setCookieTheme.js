import Cookies from 'js-cookie';
import constants from '../../constants/Theme';
import { megafon_cookie_name_theme } from '../../config/theme';

const { SETTHEME } = constants;

const setCookieTheme = () => next => action => {
  if (action.type === SETTHEME) {
    Cookies.set(megafon_cookie_name_theme, action.payload);
  }
  return next(action);
};

export default setCookieTheme;
