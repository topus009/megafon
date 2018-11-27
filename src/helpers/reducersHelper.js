import _ from 'lodash';

export const newFieldErrors = (state, errorData) => ({
    ...state.fieldErrors,
    [errorData.key]: errorData.error
});

export const hasErrors = newFieldErrors => _.some(_.values(newFieldErrors));
