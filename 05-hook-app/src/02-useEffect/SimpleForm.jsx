import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log('Se llamo el useState sin dependencia ');
  }, []);

  useEffect(() => {
    console.log('Se llamo el useState de  formState ');
  }, [formState]);

  useEffect(() => {
    console.log('Se llamo el useState de email ');
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input
        className='form-control mt-2'
        type='text'
        name='username'
        id='username'
        placeholder='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        className='form-control mt-2'
        type='text'
        name='email'
        id='email'
        placeholder='email'
        value={email}
        onChange={onInputChange}
      />
      {username === 'yarito' && <Message />}
    </>
  );
};
