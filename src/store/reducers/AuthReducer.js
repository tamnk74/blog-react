import { authConstants } from '../constants';

export function auth(state = {}, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        authenticated: true,
        user: action.user
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        authenticated: true,
        user: action.user
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.LOGOUT:
      return {};
    case authConstants.REGISTER_REQUEST:
      return { registering: true };
    case authConstants.REGISTER_SUCCESS:
      return {};
    case authConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}