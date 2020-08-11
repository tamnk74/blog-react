import { put, call, select, delay } from 'redux-saga/effects';
import {
  getPosts,
  getMyPosts,
  create,
  getPost,
  updatePost,
  removePost,
} from './services';

import * as types from './constants';
import { history } from '../../../utils/history';

export function* getPostsSaga(options) {
  try {
    const response = yield call(getPosts, options.options);
    yield put({ type: types.SET_POSTS, posts: response });
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* filterPostsSaga() {
  try {
    yield delay(500);
    console.log(history.location);
    if (
      history.location.pathname === '/' ||
      history.location.pathname === '/posts'
    ) {
      const query = yield select((state) => state.app.query);
      const response = yield call(getPosts, {
        q: query,
        limit: 20,
      });
      yield put({ type: types.SET_POSTS, posts: response });
    }
    if (history.location.pathname === '/me/posts') {
      const query = yield select((state) => state.app.query);
      const response = yield call(getMyPosts, {
        q: query,
        limit: 20,
      });
      yield put({ type: types.SET_POSTS, posts: response });
    }
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* getMyPostsSaga(options) {
  try {
    const posts = yield call(getMyPosts, options.options);
    yield put({ type: types.SET_POSTS, posts });
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* getPostSaga(options) {
  try {
    const post = yield call(getPost, options.post);
    yield put({ type: types.SET_POST, post });
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* updatePostsSaga(options) {
  try {
    yield call(updatePost, options.post);
    history.push('/me/posts');
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* removePostsSaga(options) {
  try {
    yield call(removePost, options.post);
    yield put({ type: types.REMOVE_POST, post: options.post });
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export function* createPostSage(options) {
  try {
    const post = yield call(create, options.post);
    yield put({ type: types.SET_POST, post });
    history.push('/me/posts');
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}
