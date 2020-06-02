import { combineReducers } from 'redux';
import app from './containers/App/reducer';
import auth from './features/Auth/store/reducer';
import posts from './features/Post/store/reducer';
import categories from './features/Category/store/reducer';

const rootReducer = combineReducers({
  app,
  auth,
  posts,
  categories
});

export default rootReducer;