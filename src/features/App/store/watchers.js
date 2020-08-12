import { takeLatest } from 'redux-saga/effects';
import { showErrorSaga } from './sagas';

import * as types from './constants';

export default function* watchAppEffect() {
  yield takeLatest(types.ERROR, showErrorSaga);
}
