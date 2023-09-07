// @ts-nocheck
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth/authSlice';

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // @ts-ignore
      const { uid, email, displayName, photoURL } = user;
      if (!user) return dispatch(logout(null));
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);
  return status;
};
