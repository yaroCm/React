import { useContext } from 'react';
import { UserContext } from './context/userContext';

export const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>
        Welcome <small>{user.username}</small>
      </h2>
      <hr />
    </>
  );
};
