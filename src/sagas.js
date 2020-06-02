import { all, fork } from 'redux-saga/effects';
import watchUserAuthentication from './features/Auth/store/watchers';
import watchPost from './features/Post/store/watchers';
import categoryWatcher from './features/Category/store/watchers';
import appWatcher from './containers/App/watchers';

export default function* startForman() {
  yield all([
    fork(watchUserAuthentication),
    fork(watchPost),
    fork(categoryWatcher),
    fork(appWatcher),
  ]);
}