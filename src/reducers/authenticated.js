import {
  RECEIVE_AUTHENTICATED,
  LOGOUT_USER,
  RECEIVE_LOGIN,
  RECEIVE_ME,
  ERROR_LOGIN
} from '../constants';

export const user = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ME: {
      return action.payload[0];
    }
      case LOGOUT_USER: {
          return null;
      }
    default: {
      return state;
    }
  }
};

export const users = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_AUTHENTICATED: {
      return action.payload;
    }
    case LOGOUT_USER: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export const jwt = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_LOGIN: {
      return action.payload;
    }
    case LOGOUT_USER: {
      return '';
    }
    default: {
      return state;
    }
  }
};

export const errorlogin = (state = null, action) => {
  switch (action.type) {
    case ERROR_LOGIN: {
      return action.payload;
    }
      case LOGOUT_USER: {
          return null;
      }
    default: {
      return state;
    }
  }
};
