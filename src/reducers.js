    
import { combineReducers } from 'redux';

import authReducer from './containers/AuthPage/reducer';
import postReducer from './containers/PostPage/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
});

export default rootReducer;