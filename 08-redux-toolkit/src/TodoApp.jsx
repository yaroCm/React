import React, { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './api/todosApi';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const previuosTodo = () => {
    setTodoId(todoId - 1);
  };

  /* const { data: todos = [], isLoading, isFetching } = useGetTodosQuery(); */
  const { data: todo, isLoading, isFetching } = useGetTodoByIdQuery(todoId);
  return (
    <>
      <h1>Todo - RTK QUERY</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <button onClick={nextTodo}>Next Todo</button> &nbsp;
      <button onClick={previuosTodo}>Previous Todo</button>
    </>
  );
};
