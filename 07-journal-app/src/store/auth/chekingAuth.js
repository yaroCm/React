import { singInWithUserPassword } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const chekingAuth = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithUserPassword({ email, password });
    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));
    dispatch(login(result));
  };
};
