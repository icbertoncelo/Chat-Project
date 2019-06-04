/* import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MessageActions } from '../ducks/message';

export function* postMessage({ payload }) {
  try {
    const response = yield call(api.post, '/messages', payload.data);

    yield put(MessageActions.saveMessage(response.data));
  } catch (err) {
    console.log(err);
  }
} */
