import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import register from './register';
import auth from './auth';
import message from './message';

export default history => combineReducers({
  router: connectRouter(history),
  register,
  auth,
  message,
});
