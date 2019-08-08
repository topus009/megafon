import constants from '../constants/Theme';

const { SETTHEME } = constants;

export function setTheme(value) {
  return {
    type: SETTHEME,
    payload: value,
  };
}
