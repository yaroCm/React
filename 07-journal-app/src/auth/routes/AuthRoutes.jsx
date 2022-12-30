import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to={'login'} />} />
    </Routes>
  );
};
