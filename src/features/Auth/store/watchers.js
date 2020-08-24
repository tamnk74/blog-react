import { takeLatest } from 'redux-saga/effects';
import {
  registerSaga,
  loginSaga,
  getUser,
  logoutSaga,
  googleLoginSaga,
} from './sagas';

import * as types from './constants';

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.LOGIN_GOOGLE, googleLoginSaga);
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
  yield takeLatest(types.GET_AUTH_USER_INFO, getUser);
}
