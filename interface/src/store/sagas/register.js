import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as RegisterActions } from '../ducks/register';

export function* registerUser({ payload }) {
  try {
    const response = yield call(api.post, '/users', payload.data);

    yield put(RegisterActions.registerSuccess(response.data));
    yield put(push('/'));
  } catch (err) {
    console.log(err);
  }
}
