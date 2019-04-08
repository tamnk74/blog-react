    
import { combineReducers } from 'redux';

import { auth } from './AuthReducer';
import { post } from './PostReducer';
import { alert } from './AlertReducer';

const rootReducer = combineReducers({
  auth,
  post,
  alert
});

export default rootReducer;