import { registerUserWithEmailPassword } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingUserPass = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage: errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};
