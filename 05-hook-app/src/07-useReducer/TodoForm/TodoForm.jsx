import { useState } from 'react';
import { useForm } from '../../Hook/useForm';

export const TodoForm = ({ onNewTodo }) => {
  const { describe, onInputChange, onResetForm } = useForm({
    describe: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (describe === '') return;
    const newTodo = {
      id: new Date().getTime(),
      describe: describe,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='describe'
        id='describe'
        className='form-control'
        onChange={onInputChange}
        value={describe}
      />
      <button type='submit' className='btn btn-success mt-2'>
        Agregar
      </button>
    </form>
  );
};
