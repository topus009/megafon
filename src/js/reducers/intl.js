import Cookies from 'js-cookie';
import constants from '../constants/Intl';
import { messages, defaultLocale, defaultLanguages, megafon_cookie_name_lang } from '../config/translation';

const { SETLANGUAGE } = constants;

const isLangInList = lang => {
  for (let i = 0; i < defaultLanguages.length; i++) {
    if (defaultLanguages[i].value === lang) return lang;
  }
  return null;
};

const getLang = () => {
  let lang = Cookies.get(megafon_cookie_name_lang);
  if (!lang) {
    lang = navigator.language || navigator.userLanguage;

    if (typeof lang === 'string') {
      lang = lang.split('-')[0].toLowerCase();
    }
  }

  return isLangInList(lang) || defaultLocale;
};

const lang = getLang();

const initialState = {
  locale: lang,
  defaultLocale: lang,
  messages,
  languages: defaultLanguages,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SETLANGUAGE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};
