import produce from 'immer';
import { postConstants } from './constants';

// The initial state of the App
export const initialState = {
};

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case postConstants.LIST_POST:
        draft.items = action.posts
        break;
      case postConstants.SET_POST:
        draft.post = action.post
        break;
      case postConstants.REMOVE_POST:
        draft.items = state.items.filter(item => item.id != action.post.id)
        break;
      case postConstants.ERROR:
        draft.error = action.error;
        console.log(action.error);
        break;
      default:
        break;
    }
  });

export default postReducer;