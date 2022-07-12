import {put, takeLatest} from 'redux-saga/effects';

import ActionType from '../redux/user/type';
import {signInSuccess} from '../redux/user/action';
import {reset} from '../../routes/config/NavigationService';
import {AUTHENTICATE_ROUTE} from '../../routes/config/routeName';

export function* watchSignIn() {
  yield takeLatest(ActionType.SIGN_IN, handleSignIn);
}

function* handleSignIn(action) {
  const {data, callback} = action;
  try {
    const res = {
      data: {
        email: data.email,
        password: data.password,
      },
    };
    callback(res);
    if (res?.data) {
      if (!data?.status) {
        res.data['err'] = 'Lỗi';
        callback(res);
      } else {
        yield put(signInSuccess({...res?.data, ...data}));
        reset(AUTHENTICATE_ROUTE.LOGIN_SCREEN);
      }
    }
  } catch (error) {
    callback(error);
  }
}
