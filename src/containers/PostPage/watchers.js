
import { takeLatest } from 'redux-saga/effects';
import { getPostsSaga } from './saga';

import * as types from './constants';


export default function* watchUserAuthentication() {
  yield takeLatest(types.LIST_POST, getPostsSaga);
}