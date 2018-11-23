import _ from 'lodash';
import axios from 'axios';
import {dbPrefix} from '../../config.local';
import {
    requiredFields,
    isError
} from '../helpers/userErrorValidation';

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

function getUsers() {
    return dispatch => {
        dispatch({type: PENDING});
        axios.get(dbPrefix + '/contacts').then(users => {
            if(users.status === 200) {
                dispatch({
                    type: GETUSERS,
                    payload: users.data
                });
            }
        }).catch(err => console.warn({err}));
    };
}
function deleteUser(id) {
    return dispatch => {
        dispatch({type: PENDING});
        axios.delete(dbPrefix + `/contacts/${id}`).then(users => {
            if(users.status === 200) {
                dispatch({
                    type: DELETEUSER,
                    payload: users.data
                });
            }
        }).catch(err => console.log(err));
    };
}
function saveUserToStore(user) {
    return dispatch => {
        dispatch({
            type: SAVEUSERTOSTORE,
            payload: user
        });
    };
}
function saveUser(user) {
    return dispatch => {
        dispatch({type: PENDING});
        const {_id: id} = user;
        if(id) {
            axios.put(dbPrefix + `/contacts/${id}`, {
                body: _.omit(user, ['_id', '__v'])
            }).then(users => {
                if(users.status === 200) {
                    dispatch({
                        type: SAVEUSER,
                        payload: users.data
                    });
                }
            }).catch(err => console.log(err));
        } else {
            axios.post(dbPrefix + '/contacts', {body: user})
                .then(users => {
                    if(users.status === 200) {
                        dispatch({
                            type: SAVEUSER,
                            payload: users.data
                        });
                    }
                }).catch(err => console.log(err));
        }
    };
}
function editUser(data) {
    return dispatch => {
        dispatch({
            type: EDITUSER,
            payload: data
        });
        dispatch({
            type: SETERROR,
            payload: isError(data)
        });
    };
}
function setError(data) {
    return dispatch => {
        dispatch({
            type: SETERROR,
            payload: isError(data)
        });
    };
}
function clearFields() {
    return dispatch => {
        dispatch({type: CLEARFIELDS});
        if(requiredFields.length) {
            _.each(requiredFields, key => {
                dispatch({
                    type: SETERROR,
                    payload: isError({key, value: ''})
                });
            });
        }
    };
}

export {
    getUsers,
    deleteUser,
    saveUserToStore,
    saveUser,
    editUser,
    clearFields,
    setError
};
