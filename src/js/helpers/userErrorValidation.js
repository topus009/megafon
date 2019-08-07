import { hasOnlyDigits, yearIsLessThanCurrent, isEmpty } from './common';

const userErrorValidators = {
  fio: value => isEmpty(value),
  mainPhone: value => isEmpty(value) || !hasOnlyDigits(value),
  workPhone: value => !hasOnlyDigits(value),
  dateOfBirth: value => !yearIsLessThanCurrent(value),
};

const isError = ({ key, value }) => ({
  key,
  error: !userErrorValidators[key] ? false : userErrorValidators[key](value),
});

export { isError };
