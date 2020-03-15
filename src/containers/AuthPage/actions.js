import { authConstants } from './constants';
import { authService } from './services';
import { history } from '../../utils';

export const authActions = {
  login,
  logout,
  register,
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    authService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
  authService.logout();
  return { type: authConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    authService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(user) { return { type: authConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: authConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: authConstants.REGISTER_FAILURE, error } }
}