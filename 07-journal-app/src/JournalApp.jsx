import { AppRouter } from './router/AppRouter';
import React from 'react';
import { AppTheme } from './theme/AppTheme';

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
