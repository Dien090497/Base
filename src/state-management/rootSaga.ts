import {all} from 'redux-saga/effects';

import {watchSignIn} from './redux-saga/userSaga';

export default function* AppSaga() {
  yield all([watchSignIn()]);
}
