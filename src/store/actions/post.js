import { postConstants } from '__ROOT/store/constants';
import * as postService from '../services/PostService';

/**
 * Get posts with pagination
 * @param {String} type 
 * @param {int} page 
 * @param {int} limit 
 */
export const getPosts = (type = null, page, limit) => {
  return dispatch => {
    postService.getPosts(type, page, limit)
      .then(
        posts => {
          dispatch({
            type: postConstants.POST_LIST,
            posts: posts.data
          });
          dispatch({
            type: postConstants.PAGE_INFO,
            pageInfo: posts.pageInfo
          });
        },
        error => {
          dispatch({
            type: postConstants.ERROR,
            error
          });
        }
      );
  };
}

export const getMyPosts = (options) => {
  return dispatch => {
    postService.getMyPosts(options)
      .then(
        posts => {
          dispatch({
            type: postConstants.POST_LIST,
            posts: posts.data
          });
          dispatch({
            type: postConstants.PAGE_INFO,
            pageInfo: posts.pageInfo
          });
        },
        error => {
          dispatch({
            type: postConstants.ERROR,
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
            type: postConstants.ADD_POST,
            post
          });
        },
        error => {
          dispatch({
            type: postConstants.ERROR,
            error
          });
        }
      );
  };
}

export const removePost = (post) => {
  return dispatch => {
    postService.remove(post)
      .then(
        res => {
          dispatch({
            type: postConstants.DELETE_POST,
            post
          });
        },
        error => {
          dispatch({
            type: postConstants.ERROR,
            error
          });
        }
      );
  };
}