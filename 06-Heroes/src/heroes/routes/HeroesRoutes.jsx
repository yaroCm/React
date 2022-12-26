import { DCPage } from '../pages/DcPage';
import { HeroPage } from '../pages/HeroPage';
import { MarvelPage } from '../pages/MarvelPage';
import { Navbar } from '../../ui/components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SearchPage } from '../pages/SearchPage';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DCPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:id' element={<HeroPage />} />
          <Route path='/' element={<Navigate to={'/marvel'} />} />
        </Routes>
      </div>
    </>
  );
};
