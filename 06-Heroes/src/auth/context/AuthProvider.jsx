import React from 'react';
import { useReducer } from 'react';
import { types } from '../Types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user,
  };
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const loggingName = (name = '') => {
    const user = {
      id: 123,
      name,
    };
    const action = {
      type: types.login,
      payload: {
        user,
      },
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logOut = () => {
    const action = {
      type: types.logout,
    };
    localStorage.removeItem('user');
    dispatch(action);
  };
  return (
    <AuthContext.Provider value={{ logOut, loggingName, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};
