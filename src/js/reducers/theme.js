import Cookies from 'js-cookie';
import constants from '../constants/Theme';
import { defaultTheme, defaultThemes, megafon_cookie_name_theme } from '../config/theme';

const { SETTHEME } = constants;

const isThemeInList = theme => {
  let currentTheme = null;
  defaultThemes.forEach(({ value }) => {
    if (value === +theme) {
      currentTheme = +theme;
    }
  });
  return currentTheme;
};

const getTheme = () => {
  const theme = Cookies.get(megafon_cookie_name_theme);

  return isThemeInList(theme) || defaultTheme;
};

const currentTheme = getTheme();

const initialState = {
  currentTheme,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SETTHEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};
