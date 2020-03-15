import produce from 'immer';
import { authConstants } from './constants';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
const jwt = localStorage.getItem('jwt');
const initialState = jwt && user ? { loggedIn: true, user } : {};
axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case authConstants.LOGIN_SUCCESS:
        console.log(action);
        draft.user = action.user
        break;
      default:
        return;
    }
  })

export default authReducer;