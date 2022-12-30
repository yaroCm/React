import { JournalPage } from '../pages/JournalPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

export const JournalRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='journal' element={<JournalPage />} />
      </Routes>
    </>
  );
};
