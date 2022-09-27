import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useTodo } from '../Hook/useTodo';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoList } from './TodoList/TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {
  const { todos, totalTodo, onNewTodo, handleDeleteTodo, handleChangeDone } =
    useTodo();
  return (
    <>
      <h1>TodoApp ({totalTodo}) </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleChangeDone={handleChangeDone}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar</h4>
          <TodoForm onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
