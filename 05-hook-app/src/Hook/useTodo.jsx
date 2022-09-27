import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { todoReducer } from '../07-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo) => {
    const action = {
      type: 'AddTodo',
      payload: newTodo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: 'Removetodo',
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleChangeDone = (id) => {
    const action = {
      type: 'ChangeDoneTodo',
      payload: id,
    };
    dispatchTodo(action);
  };

  return {
    todos,
    totalTodo: todos.length,
    onNewTodo,
    handleDeleteTodo,
    handleChangeDone,
  };
};
