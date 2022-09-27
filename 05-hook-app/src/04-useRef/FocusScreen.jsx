import React from 'react';
import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type='text'
        placeholder='Ingrese su nombre'
        className='form-control'
        onClick={onClick}
      />
      <button className='btn btn-success mt-3'>Set focus</button>
    </>
  );
};
