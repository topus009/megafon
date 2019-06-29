import { requiredFields, defaultFieldErrors } from '../config/fieldErrors';
import { newFieldErrors, hasErrors } from './reducersHelper';

const preparedErrorData = (state, payload) => {
  const editUserFieldErrors = newFieldErrors(state, payload);
  return {
    fieldErrors: editUserFieldErrors,
    errors: hasErrors(editUserFieldErrors),
  };
};

const preparedRequiredFieldsData = () => {
  const fieldErrors = { ...defaultFieldErrors };
  requiredFields.forEach(key => {
    fieldErrors[key] = true;
  });
  return {
    fieldErrors,
    errors: hasErrors(fieldErrors),
  };
};

export { preparedErrorData, preparedRequiredFieldsData };
