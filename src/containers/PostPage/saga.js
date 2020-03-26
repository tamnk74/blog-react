import {put, call} from 'redux-saga/effects';
import {getPosts} from './services';

import * as types from './constants'

export function* getPostsSaga(options) {
  try {
    const response = yield call(getPosts, options.options);
    yield put({type: types.SET_POSTS, posts: response});
  } catch (error) {
    yield put({type: types.ERROR, error});
  }
}