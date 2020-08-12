import { put, call, delay } from 'redux-saga/effects';
import { register, login, getUserInfo } from './services';

import * as types from './constants';
import { history } from '../../../utils/history';

export function* registerSaga(payload) {
  try {
    const response = yield call(register, payload);
    yield [put({ type: types.REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const user = yield call(login, payload.user);
    yield put({ type: types.SET_USER, user });
    history.push('/');
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* logoutSaga() {
  try {
    yield delay(500);
    yield put({ type: types.REMOVE_USER });
    localStorage.removeItem('token');
    history.push('/');
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* getUser() {
  try {
    const user = yield call(getUserInfo);
    yield put({ type: types.SET_USER, user });
  } catch (error) {
    localStorage.removeItem('token');
    yield put({ type: types.ERROR, error });
  }
}
