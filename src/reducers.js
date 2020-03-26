import { combineReducers } from 'redux';
import auth from './containers/AuthPage/reducer';
import posts from './containers/PostPage/reducer';
import categories from './containers/CategoryPage/reducer';

const rootReducer = combineReducers({
  auth,
  posts,
  categories
});

export default rootReducer;