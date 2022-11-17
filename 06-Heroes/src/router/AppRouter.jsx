import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { DCPage } from '../heroes/pages/DcPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { Navbar } from '../ui/components/Navbar';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DCPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/' element={<Navigate to={'/marvel'} />} />
      </Routes>
    </>
  );
};
