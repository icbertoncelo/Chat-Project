import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as AuthActions } from '../ducks/auth';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/sessions', payload.data);

    localStorage.setItem('@Chat:token', response.data.token);

    yield put(AuthActions.loginSuccess(response.data));
    yield put(push('/chat'));
  } catch (err) {
    console.log(err);
  }
}

export function* signOut() {
  localStorage.removeItem('@Chat:token');

  yield put(push('/'));
}
