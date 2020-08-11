import { put, call } from 'redux-saga/effects';
import { getCategories } from './services';

import * as types from './constants';

export function* getListCategories(payload) {
  try {
    const categories = yield call(getCategories, payload.options);
    yield put({ type: types.SET_CATEGORIES, categories });
  } catch (error) {
    localStorage.removeItem('token');
    yield put({ type: types.ERROR, error });
  }
}
