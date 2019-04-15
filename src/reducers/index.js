    
import { combineReducers } from 'redux';

import { auth } from './AuthReducer';
import { posts } from './PostReducer';
import { alert } from './AlertReducer';
import initForm from './InitFormReducer'

const rootReducer = combineReducers({
  auth,
  posts,
  alert,
  ...initForm,
});

export default rootReducer;