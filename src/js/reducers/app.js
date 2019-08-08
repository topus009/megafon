import constants from '../constants/App';
import { defaultFieldErrors } from '../config/fieldErrors';
import { preparedErrorData, preparedRequiredFieldsData } from '../helpers/reducersPrepareDataHelpers';
import { defaultLocale } from '../config/translation';

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

export const initialState = {
  users: [],
  user: defaultUser,
  loading: false,
  errors: false,
  fieldErrors: defaultFieldErrors,
  language: defaultLocale,
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
        users: state.users.filter(({ _id }) => _id !== payload),
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
      return {
        ...state,
        ...preparedErrorData(state, payload),
      };
    case SAVEUSERTOSTORE:
      return {
        ...state,
        user: payload,
        fieldErrors: defaultFieldErrors,
        errors: false,
      };
    case EDITUSER:
      return {
        ...state,
        user: {
          ...state.user,
          [payload.userData.key]: payload.userData.value,
        },
        ...preparedErrorData(state, payload.errorData),
      };
    case CLEARFIELDS:
      return {
        ...state,
        user: defaultUser,
        ...preparedRequiredFieldsData(state),
      };
    default:
      return state;
  }
}
