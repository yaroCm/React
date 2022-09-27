import { useContext } from 'react';
import { json } from 'react-router-dom';
import { UserContext } from './context/userContext';

export const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>Login</div>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        className='btn btn-primary'
        onClick={() =>
          setUser({ id: 123, username: 'Jordi', email: 'jordi@mail.com' })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
