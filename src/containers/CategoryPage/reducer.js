import produce from 'immer';
import * as types  from './constants';

// The initial state of the App
export const initialState = {
  items: [],
};

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_CATEGORIES:
        draft.items = action.categories
        break;
      case types.ERROR:
        draft.error = action.error;
    }
  });

export default postReducer;