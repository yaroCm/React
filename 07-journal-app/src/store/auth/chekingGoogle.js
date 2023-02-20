import { checkingCredentials } from './authSlice';

export const chekingGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
