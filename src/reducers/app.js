import _ from 'lodash';
import {
    GETUSERS,
    DELETEUSER,
    PENDING,
    SETERRORS,
    SAVEUSERTOSTORE,
    UPDATEUSERS,
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
        case SETERRORS:
            return {
                ...state,
                errors: _.find(payload)
            };
        case SAVEUSERTOSTORE:
            return {
                ...state,
                user: payload
            };
        case UPDATEUSERS:
            return {
                ...state,
                users: payload,
                user: defaultUser,
                fieldErrors: defaultFieldErrors,
                loading: false
            };
        case EDITUSER:
            return {
                ...state,
                user: {
                    ...state.user,
                    [payload.key]: payload.value
                }
            };
        case SETERROR:
            return {
                ...state,
                fieldErrors: {
                    ...state.fieldErrors,
                    [payload.key]: payload.value
                }
            };
        case CLEARFIELDS:
            return {
                ...state,
                user: defaultUser,
                fieldErrors: defaultFieldErrors
            };
        default:
            return {...state};
    }
}
