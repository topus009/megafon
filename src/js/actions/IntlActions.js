import constants from '../constants/Intl';

const { SETLANGUAGE } = constants;

export function setLanguage(value) {
  return {
    type: SETLANGUAGE,
    payload: value,
  };
}
