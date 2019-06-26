import values from 'lodash/values';

export const newFieldErrors = (state, errorData) => ({
  ...state.fieldErrors,
  [errorData.key]: errorData.error,
});

export const hasErrors = errors => values(errors).some(value => value);
