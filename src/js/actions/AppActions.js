import axio from 'axios';
import { dbPrefix } from '../config/constants';
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

const axios = axio.create({
  baseURL: dbPrefix,
});

export function getUsers() {
  return dispatch => {
    dispatch({ type: PENDING });
    return axios
      .get('/contacts')
      .then(users => {
        dispatch({
          type: GETUSERS,
          payload: users.data,
        });
      })
      .catch(err => {
        console.error({ err });
        return dispatch({ type: GETUSERSERROR });
      });
  };
}
export function deleteUser(id) {
  return dispatch => {
    dispatch({ type: PENDING });
    return axios
      .delete(`/contacts/${id}`)
      .then(res => {
        dispatch({
          type: DELETEUSER,
          payload: res.data._id,
        });
      })
      .catch(err => {
        console.error({ err });
        return dispatch({ type: DELETEUSERERROR });
      });
  };
}
export function saveUserToStore(user) {
  return {
    type: SAVEUSERTOSTORE,
    payload: user,
  };
}
export function saveUser(user) {
  return dispatch => {
    dispatch({ type: PENDING });
    const { _id: id } = user;
    if (id) {
      const { _id, __v, ...userFields } = user;
      return axios
        .put(`/contacts/${id}`, {
          body: userFields,
        })
        .then(users => {
          dispatch({
            type: SAVEUSER,
            payload: users.data,
          });
        })
        .catch(err => console.log(err));
    }
    return axios
      .post(`/contacts`, { body: user })
      .then(users => {
        dispatch({
          type: SAVEUSER,
          payload: users.data,
        });
      })
      .catch(err => console.log(err));
  };
}
export function editUser(data) {
  return {
    type: EDITUSER,
    payload: {
      userData: data,
      errorData: isError(data),
    },
  };
}
export function setError(data) {
  return {
    type: SETERROR,
    payload: isError(data),
  };
}
export function clearFields() {
  return {
    type: CLEARFIELDS,
  };
}
