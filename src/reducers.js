import { combineReducers } from 'redux';
import app from './features/App/store/reducer';
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