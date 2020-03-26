import produce from 'immer';
import * as types from './constants';

// The initial state of the App
export const initialState = {
  posts: [],
  post: null
};

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_POSTS:
        draft.items = action.posts;
        break;
      case types.SET_POST:
        draft.post = action.post
        break;
      case types.REMOVE_POST:
        draft.items = state.items.filter(item => item.id != action.post.id)
        break;
      case types.ERROR:
        draft.error = action.error;
        console.log(action.error);
        break;
      default:
        break;
    }
  });

export default postReducer;