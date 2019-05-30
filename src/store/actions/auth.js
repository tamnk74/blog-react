import { authConstants } from '../constants';
import { authService } from '__ROOT/store/services';
import { history } from '__ROOT/lib/utils';
import Email from '__ROOT/lib/utils/Email';


export const login = (username, password) => {
  const payload = Object.assign({ 
    password: password
  },
  Email.isValid(username) ? {email: username} : {name: username});
  return dispatch => {
    authService.login(payload)
      .then(user => {
          dispatch({ type: authConstants.LOGIN_SUCCESS, user });
          history.push('/');
        },
        error => {
          dispatch({ type: authConstants.LOGIN_FAILURE, error });
        }
      );
  };
}

export const getUser = () => {
  return dispatch => {
    authService.getUser()
      .then(user => {
          dispatch({ type: authConstants.LOGIN_SUCCESS, user });
        },
        error => {
          dispatch({ type: authConstants.LOGIN_FAILURE, error });
        }
      );
  };
}


export const logout = () => {
  authService.logout();
  return dispatch => {
    dispatch({ type: authConstants.LOGOUT });
  }
}

export const register = (user) => {
  return dispatch => {
    authService.register(user)
      .then(user => {
          dispatch({ 
            type: authConstants.REGISTER_SUCCESS, 
            user
          });
          history.push('/login');
        },
        error => {
          dispatch({ 
            type: authConstants.REGISTER_FAILURE, 
            error 
          });
        }
      );
  };
}