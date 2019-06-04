import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/sessions', payload.data);

    localStorage.setItem('@Chat:token', response.data.token);

    yield put(LoginActions.loginSuccess(response.data));
    yield put(push('/chat'));
  } catch (err) {
    console.log(err);
  }
}

export function* signOut() {
  localStorage.removeItem('@Chat:token');

  yield put(push('/'));
}
