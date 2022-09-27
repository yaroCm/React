export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'AddTodo':
      return [...initialState, action.payload];

    case 'Removetodo':
      return initialState.filter((todo) => todo.id !== action.payload);

    case 'ChangeDoneTodo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
