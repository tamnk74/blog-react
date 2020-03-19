    
import { combineReducers } from 'redux';

import authReducer from './containers/AuthPage/reducer';
import postReducer from './containers/PostPage/reducer';
import categoryReducer from './containers/CategoryPage/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
  categories: categoryReducer,
});

export default rootReducer;