import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';
import ComplaintReducer from './ComplaintReducer';

const rootReducer = combineReducers({
  loginReducer: LoginReducer,
  complaintReducer: ComplaintReducer,
  signUpReducer: SignUpReducer
});

export default rootReducer;
