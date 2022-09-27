const initialState = [
  {
    id: 1,
    todo: 'Recolectar pan',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'Add':
      return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();
console.log(todos);

const newTodo = {
  id: 2,
  todo: 'Descargar película',
  done: false,
};

const addTodoAction = {
  type: 'Add',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
