import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
