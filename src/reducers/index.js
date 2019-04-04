    
import { combineReducers } from 'redux';

import { auth } from './AuthReducer';
import { signup } from './SignUpReducer';
//import { user } from './UserReducer';
import { alert } from './AlertReducer';

const rootReducer = combineReducers({
  auth,
  signup,
  //user,
  alert
});

export default rootReducer;