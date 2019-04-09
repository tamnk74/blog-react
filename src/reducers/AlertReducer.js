import { alertConstants } from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'error',
        error: action.error
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}