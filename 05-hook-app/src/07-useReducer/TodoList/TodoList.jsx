import React from 'react';
import { TodoItems } from './TodoItems';

export const TodoList = ({ todos, handleDeleteTodo, handleChangeDone }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleChangeDone={handleChangeDone}
        />
      ))}
    </ul>
  );
};
