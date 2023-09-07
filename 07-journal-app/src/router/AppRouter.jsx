import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalPage } from '../journal/pages/JournalPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {
  // @ts-ignore
  const { status } = useSelector((state) => state.auth);

  if (status === 'checking') return <CheckingAuth />;
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/*' element={<JournalPage />} />
    </Routes>
  );
};
