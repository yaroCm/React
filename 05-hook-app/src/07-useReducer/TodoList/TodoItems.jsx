import React from 'react';

export const TodoItems = ({ todo, handleDeleteTodo, handleChangeDone }) => {
  return (
    <>
      <li
        key={todo.id}
        className='list-group-item d-flex justify-content-between'
        onDoubleClick={() => handleChangeDone(todo.id)}
      >
        <span className='align-self-center'>
          {' '}
          {todo.done ? <strike>{todo.describe}</strike> : todo.describe}
        </span>
        <button
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
          className='btn btn-danger'
        >
          x
        </button>
      </li>
    </>
  );
};
