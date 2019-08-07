export const newFieldErrors = (state, errorData) => ({
  ...state.fieldErrors,
  [errorData.key]: errorData.error,
});

export const hasErrors = errors => {
  return Object.keys(errors)
    .map(key => errors[key])
    .some(value => value);
};
