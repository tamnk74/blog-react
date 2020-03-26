import * as types from './constants';

export const getPosts = (options) => {
  return {
    type: types.LIST_POST,
    options
  }
};

export const getMyPosts = (posts) => {
  return {
    type: types.LIST_MY_POSTS,
    posts
  }
};

export const getPost = (post) => {
  return {
    type: types.SET_POST,
    post
  };
};

export const createPost = (post) => {
  return {
    type: types.CREATE_POST,
    post
  }
}

export const updatePost = (post) => {
  return {
    type: types.UPDATE_POST,
    post
  }
}


export const removePost = (post) => {
  return {
    type: types.REMOVE_POST,
    post
  }
}