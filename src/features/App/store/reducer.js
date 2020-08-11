/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_QUERY, SET_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  error: null,
  query: '',
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_QUERY:
        draft.query = action.query;
        break;
      case SET_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default appReducer;
