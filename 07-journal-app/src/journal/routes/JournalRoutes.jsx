import { JournalPage } from '../pages/JournalPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

export const JournalRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<JournalPage />} />

        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};
