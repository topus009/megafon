import _ from 'lodash';
import axios from 'axios';
import { dbPrefix } from '../../config.local';
import { isError } from '../helpers/userErrorValidation';
import constants from '../constants/App';

const {
  GETUSERS,
  GETUSERSERROR,
  DELETEUSER,
  DELETEUSERERROR,
  PENDING,
  SAVEUSERTOSTORE,
  SAVEUSER,
  EDITUSER,
  SETERROR,
  CLEARFIELDS,
} = constants;

function getUsers() {
  return dispatch => {
    dispatch({ type: PENDING });
    return axios
      .get(`${dbPrefix}/contacts`)
      .then(users => {
        // if (users.status === 200) {
        dispatch({
          type: GETUSERS,
          payload: users.data,
        });
        // }
      })
      .catch(err => {
        console.error({ err });
        return dispatch({ type: GETUSERSERROR });
      });
  };
}
function deleteUser(id) {
  return dispatch => {
    dispatch({ type: PENDING });
    return axios
      .delete(`${dbPrefix}/contacts/${id}`)
      .then(res => {
        // if (res.status === 200) {
        dispatch({
          type: DELETEUSER,
          payload: res.data._id,
        });
        // }
      })
      .catch(err => {
        console.error({ err });
        return dispatch({ type: DELETEUSERERROR });
      });
  };
}
function saveUserToStore(user) {
  return {
    type: SAVEUSERTOSTORE,
    payload: user,
  };
}
function saveUser(user) {
  return dispatch => {
    dispatch({ type: PENDING });
    const { _id: id } = user;
    if (id) {
      return axios
        .put(`${dbPrefix}/contacts/${id}`, {
          body: _.omit(user, ['_id', '__v']),
        })
        .then(users => {
          // if (users.status === 200) {
          dispatch({
            type: SAVEUSER,
            payload: users.data,
          });
          // }
        })
        .catch(err => console.log(err));
    }
    return axios
      .post(`${dbPrefix}/contacts`, { body: user })
      .then(users => {
        // if (users.status === 200) {
        dispatch({
          type: SAVEUSER,
          payload: users.data,
        });
        // }
      })
      .catch(err => console.log(err));
  };
}
function editUser(data) {
  return {
    type: EDITUSER,
    payload: {
      userData: data,
      errorData: isError(data),
    },
  };
}
function setError(data) {
  return {
    type: SETERROR,
    payload: isError(data),
  };
}
function clearFields() {
  return {
    type: CLEARFIELDS,
  };
}

export { getUsers, deleteUser, saveUserToStore, saveUser, editUser, clearFields, setError };
