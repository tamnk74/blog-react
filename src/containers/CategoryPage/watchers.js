
import { takeLatest } from 'redux-saga/effects';
import { getListCategories } from './sagas';

import * as types from './constants';


export default function* watchCategoryActions() {
  yield takeLatest(types.GET_CATEGORIES, getListCategories);
}