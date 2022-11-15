import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItems } from '../../../src/07-useReducer/TodoList/TodoItems';

describe('Test <TodoItems>', () => {
  const todo = {
    id: 1,
    describe: 'Do test',
    done: false,
  };
  const handleDeleteTodoMock = jest.fn();
  const handleChangeDoneMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test('should show the item ', () => {
    render(
      <TodoItems
        todo={todo}
        handleDeleteTodo={handleDeleteTodoMock}
        handleChangeDone={handleChangeDoneMock}
      />
    );
    expect(screen.getByText(todo.describe)).toBeTruthy();
  });
  test('should handle handleDeleteTodoMock', () => {
    render(
      <TodoItems
        todo={todo}
        handleDeleteTodo={handleDeleteTodoMock}
        handleChangeDone={handleChangeDoneMock}
      />
    );
    fireEvent.click(screen.getByText('x'));
    expect(handleDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test('should handle handleChangeDoneMock', () => {
    render(
      <TodoItems
        todo={todo}
        handleDeleteTodo={handleDeleteTodoMock}
        handleChangeDone={handleChangeDoneMock}
      />
    );
    screen.debug();
    fireEvent.doubleClick(screen.getByRole('listitem'));
    expect(handleChangeDoneMock).toHaveBeenCalledWith(todo.id);
  });
});
