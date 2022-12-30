import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalPage } from '../journal/pages/JournalPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/*' element={<JournalPage />} />
    </Routes>
  );
};
