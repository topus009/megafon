import _ from 'lodash';
import axios from 'axios';
import config from '../../config.local';

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

const {dbPrefix} = config;

export function getUsers() {
    return dispatch => {
        dispatch({type: PENDING});
        axios.get(dbPrefix + '/contacts').then(data => {
            if(data.status === 200) {
                dispatch({
                    type: GETUSERS,
                    payload: data.data
                });
            }
        }).catch(err => console.warn({err}));
    };
}
export function deleteUser(id) {
    return dispatch => {
        dispatch({type: PENDING});
        axios.delete(dbPrefix + `/contacts/${id}`).then(data => {
            if(data.status === 200) {
                dispatch({
                    type: DELETEUSER,
                    payload: data.data
                });
            }
        }).catch(err => console.log(err));
    };
}
export function setErrors(errors) {
    return dispatch => {
        dispatch({
            type: SETERRORS,
            payload: errors
        });
    };
}
export function saveUserToStore(user) {
    return dispatch => {
        dispatch({
            type: SAVEUSERTOSTORE,
            payload: user
        });
    };
}
export function saveUser(user) {
    return dispatch => {
        dispatch({type: PENDING});
        const {_id: id} = user;
        if(id) {
            console.warn({xxx1: _.omit(user, ['_id', '__v'])});
            axios.put(dbPrefix + `/contacts/${id}`, {
                body: _.omit(user, ['_id', '__v'])
            }).then(data => {
                if(data.status === 200) {
                    dispatch({
                        type: UPDATEUSERS,
                        payload: data.data
                    });
                }
            }).catch(err => console.log(err));
        } else {
            console.warn({xxx2: user});

            axios.post(dbPrefix + '/contacts', {body: user}).then(data => {
                if(data.status === 200) {
                    console.warn({data});

                    dispatch({
                        type: UPDATEUSERS,
                        payload: data.data
                    });
                }
            }).catch(err => console.log(err));
        }
    };
}
export function editUser(data) {
    return dispatch => {
        dispatch({
            type: EDITUSER,
            payload: data
        });
    };
}
export function setError(data) {
    return dispatch => {
        dispatch({
            type: SETERROR,
            payload: data
        });
    };
}
export function clearFields() {
    return dispatch => {
        dispatch({type: CLEARFIELDS});
    };
}
