import { authConstants } from '../constants';
import axios from 'axios';

let user = JSON.parse(localStorage.getItem('user'));
let jwt = localStorage.getItem('jwt');
const initialState = jwt && user ? { loggedIn: true, user } : {};
axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;


export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
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