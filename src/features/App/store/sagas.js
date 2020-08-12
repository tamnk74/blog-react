import { put, select, delay } from 'redux-saga/effects';

import * as types from './constants';

export function* showErrorSaga() {
  try {
    const error = yield select(
      (state) =>
        state.auth.error || state.posts.error || state.categories.error,
    );
    yield put({ type: types.SET_ERROR, error });
    yield delay(100);
    yield put({ type: types.SET_ERROR, error: null });
  } catch (error) {
    yield put({ type: types.SET_ERROR, error });
  }
}
