import { authConstants } from '../constants';

export function signup(state = {}, action) {
  switch (action.type) {
    case authConstants.REGISTER_REQUEST:
      return {
        signup: true
      };
    case authConstants.REGISTER_SUCCESS:
      return {};
    case authConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}