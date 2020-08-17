import * as types from './constants';

export const registerAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export const googleLoginAction = (user) => {
  return {
    type: types.LOGIN_GOOGLE,
    user,
  };
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT_USER,
  };
};

export const getUserAction = () => {
  return {
    type: types.GET_AUTH_USER_INFO,
  };
};
