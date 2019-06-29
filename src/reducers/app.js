import reject from 'lodash/reject';
import clone from 'lodash/clone';
import merge from 'lodash/merge';
import constants from '../constants/App';
import { newFieldErrors, hasErrors } from '../helpers/reducersHelper';

const { GETUSERS, DELETEUSER, PENDING, SAVEUSERTOSTORE, SAVEUSER, EDITUSER, SETERROR, CLEARFIELDS } = constants;

const defaultUser = {
  fio: '',
  mainPhone: '',
  workPhone: '',
  email: '',
  dateOfBirth: '',
  address: '',
  vk: '',
  comments: '',
};

export const requiredFields = ['fio'];

const defaultFieldErrors = {
  fio: false,
  mainPhone: false,
  workPhone: false,
  email: false,
  dateOfBirth: false,
  address: false,
  vk: false,
  comments: false,
};

export const initialState = {
  users: [],
  user: defaultUser,
  loading: false,
  errors: false,
  fieldErrors: defaultFieldErrors,
};

export default function app(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case GETUSERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case PENDING:
      return {
        ...state,
        loading: true,
      };
    case DELETEUSER:
      return {
        ...state,
        users: reject(state.users, { _id: payload }),
        loading: false,
      };
    case SAVEUSER:
      return {
        ...state,
        users: payload,
        user: defaultUser,
        loading: false,
      };
    case SETERROR:
      const setErrorFieldErrors = newFieldErrors(state, payload);
      const setErrorState = {
        fieldErrors: editUserFieldErrors,
        errors: hasErrors(setErrorFieldErrors),
      };
      return {
        ...state,
        ...setErrorState,
      };
    case SAVEUSERTOSTORE:
      return {
        ...state,
        user: payload,
        fieldErrors: defaultFieldErrors,
        errors: false,
      };
    case EDITUSER:
      const { userData, errorData } = payload;
      const editUserFieldErrors = newFieldErrors(state, errorData);
      const editUserState = {
        user: {
          ...state.user,
          [userData.key]: userData.value,
        },
        fieldErrors: editUserFieldErrors,
        errors: hasErrors(editUserFieldErrors),
      };
      return {
        ...state,
        ...editUserState,
      };
    case CLEARFIELDS:
      let setRequiredFieldsError = clone(defaultFieldErrors);
      requiredFields.forEach(key => {
        setRequiredFieldsError = merge(setRequiredFieldsError, newFieldErrors(state, { key, error: true }));
      });
      const setClearFieldsState = {
        user: defaultUser,
        fieldErrors: setRequiredFieldsError,
        errors: hasErrors(setRequiredFieldsError),
      };
      return {
        ...state,
        ...setClearFieldsState,
      };
    default:
      return state;
  }
}
