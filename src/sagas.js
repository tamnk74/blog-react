import {all, fork} from 'redux-saga/effects';
import watchUserAuthentication from './containers/AuthPage/watchers';
import watchPost from './containers/PostPage/watchers';
import categoryWatcher from './containers/CategoryPage/watchers';

export default function* startForman() {
  yield all([
    fork(watchUserAuthentication),
    fork(watchPost),
    fork(categoryWatcher),
  ]);
}