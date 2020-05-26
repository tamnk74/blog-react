import {takeLatest} from 'redux-saga/effects';
import {
  getPostsSaga,
  getPostSaga,
  createPostSage,
  getMyPostsSaga,
  updatePostsSaga,
  removePostsSaga,
  filterPostsSaga,
} from './saga';

import * as types from './constants';
import {SET_QUERY} from "../../../containers/App/constants";

export default function* watchUserAuthentication() {
  yield takeLatest(types.LIST_POST, getPostsSaga);
  yield takeLatest(SET_QUERY, filterPostsSaga);
  yield takeLatest(types.UPDATE_POST, updatePostsSaga);
  yield takeLatest(types.FETCH_REMOVE_POST, removePostsSaga);
  yield takeLatest(types.FETCH_POST, getPostSaga);
  yield takeLatest(types.FETCH_MY_POSTS, getMyPostsSaga);
  yield takeLatest(types.CREATE_POST, createPostSage);
}