import { postConstants } from '../../constants';
import { postService } from '../../services';
import { alertActions, authActions } from '../';

export const postActions = {
    getPosts,
    createPost
};

function getPosts(type = null, page, limit) {
    return dispatch => {
        postService.getPosts(type, page, limit)
            .then(
                posts => {
                    dispatch(success(posts));
                },
                error => {
                    if (error.response && error.response.status == 401) {
                        dispatch(authActions.logout());
                    }
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function success(posts) { return { type: postConstants.LIST_POST_SUCCESS, posts } }
    function failure(error) { return { type: postConstants.LIST_POST_FAILED, error } }
}

function createPost(post) {
    return dispatch => {
        postService.create(post)
            .then(
                post => {
                    dispatch(success(post));
                },
                error => {
                    if (error && error.status == 401) {
                        dispatch(authActions.logout());
                    }
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function success(post) { return { type: postConstants.CREATE_POST_SUCCESS, post } }
    function failure(error) { return { type: postConstants.CREATE_POST_FAILED, error } }
}