import { todoReducer } from '../../src/07-useReducer/todoReducer';

describe('Test Todo Reducer', () => {
  const initalState = [
    {
      id: 1,
      description: 'Test the reducer',
      done: false,
    },
  ];

  test('should return inital value', () => {
    const newState = todoReducer(initalState, {});
    expect(newState).toBe(initalState);
  });

  test('should add a todo', () => {
    const action = {
      type: 'AddTodo',
      payload: {
        id: 2,
        description: 'Test add reducer',
        done: false,
      },
    };
    const newState = todoReducer(initalState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('should delete a todo', () => {
    const action = {
      type: 'Removetodo',
      payload: 1,
    };
    const newState = todoReducer(initalState, action);
    expect(newState.length).toBe(0);
  });
  test('should change the toggle todo', () => {
    const action = {
      type: 'ChangeDoneTodo',
      payload: 1,
    };
    const newState = todoReducer(initalState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
