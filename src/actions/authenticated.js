import {
  REQUEST_AUTHENTICATED,
  RECEIVE_AUTHENTICATED,
  ERROR_AUTHENTICATED,
  LOGOUT_USER
} from '../constants';

const requestAuthenticated = () => {
  return {
    type: REQUEST_AUTHENTICATED
  };
};

const receiveAuthenticated = json => {
  return {
    type: RECEIVE_AUTHENTICATED,
    payload: json.data
  };
};

const errorAuthenticated = () => {
  return {
    type: ERROR_AUTHENTICATED
  };
};

const logout = () => {
  return {
    type: LOGOUT_USER
  };
};

export const logoutUser = prop => {
  return dispatch => {
    prop;
    dispatch(logout());
  };
};

export const fetchAuthenticated = (jwt) => {
  return dispatch => {
    dispatch(requestAuthenticated());
    return fetch(`http://localhost:5002/v1/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveAuthenticated(json)))
      .catch(e => {
        console.log(e)
      });
  };
};
