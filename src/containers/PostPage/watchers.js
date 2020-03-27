import {takeLatest} from 'redux-saga/effects';
import {
  getPostsSaga,
  getPostSaga,
  createPostSage,
  getMyPostsSaga,
  updatePostsSaga,
  removePostsSaga
} from './saga';

import * as types from './constants';


export default function* watchUserAuthentication() {
  yield takeLatest(types.LIST_POST, getPostsSaga);
  yield takeLatest(types.UPDATE_POST, updatePostsSaga);
  yield takeLatest(types.FETCH_REMOVE_POST, removePostsSaga);
  yield takeLatest(types.FETCH_POST, getPostSaga);
  yield takeLatest(types.FETCH_MY_POSTS, getMyPostsSaga);
  yield takeLatest(types.CREATE_POST, createPostSage);
}