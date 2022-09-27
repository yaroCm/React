import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { About } from './About';
import { UserProvider } from './context/UserProvider';
import { Home } from './Home';
import { Login } from './Login';
import { NavBar } from './NavBar';

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
      <hr />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Navigate to='/about' />} />
      </Routes>
    </UserProvider>
  );
};
