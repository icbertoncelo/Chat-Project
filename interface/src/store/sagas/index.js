import { all, takeLatest } from 'redux-saga/effects';

import { Types as RegisterTypes } from '../ducks/register';
import { Types as AuthTypes } from '../ducks/auth';
import { Types as MessageTypes } from '../ducks/message';

import { registerUser } from './register';
import { signIn, signOut } from './auth';
import { postMessage, loadMessages } from './message';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, signIn),
    takeLatest(AuthTypes.LOGOUT, signOut),
    takeLatest(RegisterTypes.REGISTER_REQUEST, registerUser),
    takeLatest(MessageTypes.ADD_MESSAGE_REQUEST, postMessage),
    takeLatest(MessageTypes.LOAD_MESSAGE_REQUEST, loadMessages),
  ]);
}
