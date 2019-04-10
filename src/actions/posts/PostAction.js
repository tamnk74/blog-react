import { postConstants } from '../../constants';
import { postService } from '../../services';
import { alertActions, authActions } from '../';

export const postActions = {
    getPosts,
};

function getPosts(type = null) {
    return dispatch => {
        postService.getPosts(type)
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
