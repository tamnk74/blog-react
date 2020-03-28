import { put, call } from 'redux-saga/effects';
import { register, login, getUserInfo } from './services';

import * as types from './constants'
import {history} from '../../utils/history'

export function* registerSaga(payload) {
  try {
    const response = yield call(register, payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}
