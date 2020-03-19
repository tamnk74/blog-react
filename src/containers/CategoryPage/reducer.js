import produce from 'immer';
import { categoryConstants } from './constants';

// The initial state of the App
export const initialState = {
};

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case categoryConstants.LIST_CATEGORY:
        draft.items = action.categories
        break;
      case categoryConstants.ERROR:
        draft.error = action.error;
        console.log(action.error);
        break;
      default:
        break;
    }
  });

export default postReducer;