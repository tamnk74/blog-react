import { postConstants } from '../../constants';
import { postService } from '../../services';
import { alertActions } from '../';

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
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function success(posts) { return { type: postConstants.LIST_POST_SUCCESS, posts } }
    function failure(error) { return { type: postConstants.LIST_POST_FAILED, error } }
}
