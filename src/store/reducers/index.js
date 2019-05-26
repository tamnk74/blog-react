    
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { auth } from './AuthReducer';
import { posts } from './PostReducer';
import { alert } from './AlertReducer';

const rootReducer = combineReducers({
  auth,
  posts,
  alert,
  form: formReducer
});

export default rootReducer;