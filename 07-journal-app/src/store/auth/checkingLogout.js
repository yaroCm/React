import { logoutFireBase } from '../../firebase/providers';
import { logout } from './authSlice';

export const checkingLogout = () => {
  return async (dispatch) => {
    await logoutFireBase();
    dispatch(logout());
  };
};
