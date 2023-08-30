import {
  registerUserWithEmailPassword,
  singInWithGoogle,
} from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const chekingGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    console.log('result', result);
    if (!result.ok) dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
export const checkingUserPass = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    console.log('result', result);
    if (!result?.ok) dispatch(logout(result?.errorMessage));
    dispatch(login(result));
  };
};
