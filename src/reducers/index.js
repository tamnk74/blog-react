    
import { combineReducers } from 'redux';

import { auth } from './AuthReducer';
import { posts } from './PostReducer';
import { alert } from './AlertReducer';

const rootReducer = combineReducers({
  auth,
  posts,
  alert,
});

export default rootReducer;