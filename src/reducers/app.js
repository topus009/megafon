import _ from 'lodash';
import {
    GETUSERS,
    DELETEUSER,
    PENDING,
    SAVEUSERTOSTORE,
    SAVEUSER,
    EDITUSER,
    SETERROR,
    CLEARFIELDS
} from '../constants/App';

const defaultUser = {
    fio: '',
    mainPhone: '',
    workPhone: '',
    email: '',
    dateOfBirth: '',
    address: '',
    vk: '',
    comments: ''
};
const defaultFieldErrors = {
    fio: false,
    mainPhone: false,
    workPhone: false,
    email: false,
    dateOfBirth: false,
    address: false,
    vk: false,
    comments: false
};

const initialState = {
    users: [],
    user: defaultUser,
    loading: false,
    errors: false,
    fieldErrors: defaultFieldErrors
};

export default function app(state = initialState, action) {
    const {payload} = action;
    switch(action.type) {
        case GETUSERS:
            return {
                ...state,
                users: payload,
                loading: false
            };
        case PENDING:
            return {
                ...state,
                loading: true
            };
        case DELETEUSER:
            return {
                ...state,
                users: payload,
                loading: false
            };
        case SAVEUSER:
            return {
                ...state,
                users: payload,
                user: defaultUser,
                loading: false
            };
        case SETERROR:
            const newFieldErrors = {
                ...state.fieldErrors,
                [payload.key]: payload.error
            };
            const hasErrors = _.some(_.values(newFieldErrors));
            return {
                ...state,
                fieldErrors: newFieldErrors,
                errors: hasErrors
            };
        case SAVEUSERTOSTORE:
            return {
                ...state,
                user: payload,
                fieldErrors: defaultFieldErrors,
                errors: false
            };
        case EDITUSER:
            return {
                ...state,
                user: {
                    ...state.user,
                    [payload.key]: payload.value
                }
            };
        case CLEARFIELDS:
            return {
                ...state,
                user: defaultUser
            };
        default:
            return {...state};
    }
}
