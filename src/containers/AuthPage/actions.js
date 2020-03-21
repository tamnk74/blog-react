import { authConstants } from './constants';
import { authService } from './services';
import { history } from '../../utils';

export const authActions = {
  login,
  getUserInfo,
  logout,
  register,
};

function login(username, password) {
  return dispatch => {
    authService.login(username, password)
      .then(user => {
        dispatch({ type: authConstants.LOGIN_SUCCESS, user });
        history.push('/');
      }).catch(error => dispatch({
        type: authConstants.ERROR,
        error: error.response
      }));
  };
}

function getUserInfo() {
  return dispatch => {
    authService.getUserInfo()
      .then(user => {
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          user
        });
      }).catch(error => dispatch({
        type: authConstants.ERROR,
        error: error.response
      }));
  };
}

function logout() {
  authService.logout();
  return dispatch => dispatch({
    type: authConstants.LOGOUT
  })
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    authService.register(user)
      .then(user => {
        dispatch({ type: authConstants.REGISTER_REQUEST, user });
        history.push('/login');
      }).catch(error => dispatch({
        type: authConstants.ERROR,
        error: error.response
      }));
  }
}