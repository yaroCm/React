import { singInWithGoogle } from '../../firebase/providers';
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
