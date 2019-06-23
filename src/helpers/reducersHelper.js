import some from 'lodash/some';
import values from 'lodash/values';

export const newFieldErrors = (state, errorData) => ({
  ...state.fieldErrors,
  [errorData.key]: errorData.error,
});

export const hasErrors = errors => some(values(errors));
