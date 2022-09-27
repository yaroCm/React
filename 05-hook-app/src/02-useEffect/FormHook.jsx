import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from '../Hook/useForm';
import { Message } from './Message';

export const FormHook = () => {
  const initialForm = {
    username: '',
    email: '',
    password: '',
  };

  const { formState, onInputChange, onResetForm, username, password, email } =
    useForm(initialForm);

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
      <h1>Form Hook</h1>
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
      <input
        className='form-control mt-2'
        type='text'
        name='password'
        id='password'
        placeholder='password'
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className='btn btn-primary mt-2'>
        Reset
      </button>
    </>
  );
};
