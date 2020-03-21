import { postConstants } from './constants';
import { postService } from './services';

export const postActions = {
  getPosts,
  getMyPosts,
  getPost,
  createPost,
  updatePost,
  removePost,
};

function getPosts(options) {
  return async dispatch => {
    try {
      const posts = await postService.getPosts(options);
      dispatch({
        type: postConstants.LIST_POST,
        posts
      })
    } catch (error) {
      dispatch({ type: postConstants.ERROR, error: error.response });
    }
  }
}

function getMyPosts(options) {
  return async dispatch => {
    try {
      const posts = await postService.getMyPosts(options);
      dispatch({
        type: postConstants.LIST_POST,
        posts
      })
    } catch (error) {
      dispatch({ type: postConstants.ERROR, error: error.response });
    }
  }
}

function getPost(slug) {
  return async dispatch => {
    try {
      const post = await postService.getPost(slug);
      dispatch({
        type: postConstants.SET_POST,
        post
      });
    } catch (error) {
      dispatch({
        type: postConstants.ERROR,
        error: error.response
      });
    }
  };
}

function createPost(postData) {
  return async dispatch => {
    try {
      const post = await postService.create(postData);
      dispatch({
        type: postConstants.SET_POST,
        post
      });
    } catch (error) {
      dispatch({
        type: postConstants.ERROR,
        error: error.response
      })
    }
  };
}

function updatePost(post) {
  return postService.update(post);
}

function removePost(post) {
  return async dispatch => {
    try {
      await postService.remove(post);
      dispatch({
        type: postConstants.REMOVE_POST,
        post
      });
    } catch (error) {
      dispatch({
        type: postConstants.ERROR,
        error: error.response
      })
    }
  };
}