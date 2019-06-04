import { all, takeLatest } from 'redux-saga/effects';

import { Types as RegisterTypes } from '../ducks/register';
import { Types as LoginTypes } from '../ducks/login';
// import { Types as MessageTypes } from '../ducks/message';

import { registerUser } from './register';
import { signIn, signOut } from './login';
// import { postMessage } from './message';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.GET_REQUEST, signIn),
    takeLatest(LoginTypes.OUT_REQUEST, signOut),
    takeLatest(RegisterTypes.ADD_REQUEST, registerUser),
    // takeLatest(MessageTypes.ADD_MESSAGE_REQUEST, postMessage),
  ]);
}
