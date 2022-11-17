import { TodoApp } from '../../src/07-useReducer/TodoApp';
import { render, screen } from '@testing-library/react';
import { useTodo } from '../../src/Hook/useTodo';

jest.mock('../../src/Hook/useTodo');
describe('Test <TodoApp>', () => {
  test('should show correctly the component', () => {
    useTodo.mockReturnValue({
      todos: [
        { id: 1, describe: 'Test1', done: false },
        { id: 2, describe: 'Test2', done: false },
      ],
      totalTodo: 1,
      onNewTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleChangeDone: jest.fn(),
    });
    render(<TodoApp />);
    expect(screen.getByText('Test1')).toBeTruthy();
    expect(screen.getByText('Test2')).toBeTruthy();
  });
});
