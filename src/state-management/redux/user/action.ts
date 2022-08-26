import ActionType from './type';

export const signIn = (data, callback) => ({
  type: ActionType.SIGN_IN,
  data,
  callback,
});
export const signInSuccess = data => ({type: ActionType.SIGN_IN_SUCCESS, data});

export const addData = data => ({type: ActionType.SIGN_IN_SUCCESS, data});
