import { combineReducers } from 'redux';
import app from './containers/App/reducer';
import auth from './containers/AuthPage/reducer';
import posts from './containers/PostPage/reducer';
import categories from './containers/CategoryPage/reducer';

const rootReducer = combineReducers({
  app,
  auth,
  posts,
  categories
});

export default rootReducer;