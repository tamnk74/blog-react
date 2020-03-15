import { postConstants } from './constants';
import { postService } from './services';

export const postActions = {
  getPosts,
  getPost,
  createPost
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
      dispatch({ type: postConstants.LIST_POST_FAILED, error });
    }
  }
}

function getPost(slug) {
  return async dispatch => {
    try {
      const post = await postService.getPost(slug);
      dispatch({
        type: postConstants.GET_POST_SUCCESS,
        post
      });
    } catch (error) {
      dispatch({
        type: postConstants.GET_POST_FAILED,
        error
      });
    }
  };
}

function createPost(postData) {
  return async dispatch => {
    try {
      const post = await postService.create(postData);
      dispatch({
        type: postConstants.CREATE_POST_SUCCESS,
        post
      });
    } catch (error) {
      dispatch({
        type: postConstants.CREATE_POST_FAILED,
        error
      })
    }
  };
}