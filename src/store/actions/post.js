import { postConstants } from '__ROOT/store/constants';
import * as postService from '../services/PostService';

export const getPosts = (type = null, page, limit) => {
  return dispatch => {
    postService.getPosts(type, page, limit)
      .then(posts => {
        dispatch({
          type: postConstants.LIST_POST_SUCCESS,
          posts
        });
      },
        error => {
          dispatch({
            type: postConstants.LIST_POST_FAILED,
            error
          });
        }
      );
  };
}

export const createPost = (post) => {
  return dispatch => {
    postService.create(post)
      .then(
        post => {
          dispatch({
            type: postConstants.CREATE_POST_SUCCESS, post
          });
        },
        error => {
          dispatch({
            type: postConstants.CREATE_POST_FAILED,
            error
          });
        }
      );
  };
}