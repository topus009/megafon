import Cookies from 'js-cookie';
import constants from '../../constants/Intl';
import { megafon_cookie_name_lang } from '../../config/translation';

const { SETLANGUAGE } = constants;

const setCookieLang = () => next => action => {
  if (action.type === SETLANGUAGE) {
    Cookies.set(megafon_cookie_name_lang, action.payload);
  }
  return next(action);
};

export default setCookieLang;
