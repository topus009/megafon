import Cookies from 'js-cookie';
import constants from '../constants/Theme';
import { defaultTheme, defaultThemes, megafon_cookie_name_theme } from '../config/theme';

const { SETTHEME } = constants;

const isThemeInList = theme => {
  for (let i = 0; i < defaultThemes.length; i++) {
    if (defaultThemes[i].value === theme) return theme;
  }
  return null;
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
