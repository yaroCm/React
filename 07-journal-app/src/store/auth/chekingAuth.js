import { checkingCredentials } from './authSlice';

export const chekingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
