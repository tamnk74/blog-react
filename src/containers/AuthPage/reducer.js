import produce from 'immer';
import { authConstants } from './constants';
import axios from 'axios';

const token = localStorage.getItem('token');
const initialState = token ? { token } : {};
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case authConstants.LOGIN_SUCCESS:
        draft.user = action.user
        break;
      case authConstants.LOGOUT:
        draft.user = null
        break;
      default:
        return;
    }
  })

export default authReducer;