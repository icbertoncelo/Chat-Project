import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import register from './register';
import login from './login';
import message from './message';

export default history => combineReducers({
  router: connectRouter(history),
  register,
  login,
  message,
});
