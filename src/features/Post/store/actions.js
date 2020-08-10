import * as types from './constants';

export const getPosts = (options) => {
  return {
    type: types.LIST_POST,
    options,
  };
};

export const getMyPosts = (options) => {
  return {
    type: types.FETCH_MY_POSTS,
    options,
  };
};

export const getPost = (post) => {
  return {
    type: types.FETCH_POST,
    post,
  };
};

export const getPostBySlug = (post) => {
  return {
    type: types.FETCH_POST_BY_SLUG,
    post,
  };
};

export const createPost = (post) => {
  return {
    type: types.CREATE_POST,
    post,
  };
};

export const updatePost = (post) => {
  return {
    type: types.UPDATE_POST,
    post,
  };
};

export const removePost = (post) => {
  return {
    type: types.FETCH_REMOVE_POST,
    post,
  };
};
