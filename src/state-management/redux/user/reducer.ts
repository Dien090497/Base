import ActionType from './type';

const initialState = {
  email: '',
  password: '',
  accessToken: '',
  refreshToken: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default userReducer;
