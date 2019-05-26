import { postConstants } from '../constants';

export function posts(state = {}, action) {
  switch (action.type) {
    case postConstants.LIST_POST_SUCCESS:
      return {
        list: action.posts
      };
    case postConstants.LOGIN_FAILURE:
      return {};
    case postConstants.CREATE_POST_FAILED:
      return {};
    case postConstants.CREATE_POST_SUCCESS:
      return {};
    case postConstants.SHOW_POST:
      return { registering: true };
    case postConstants.GET_POST:
      return {};
    case postConstants.UPDATE_POST:
      return {};
    default:
      return state
  }
}