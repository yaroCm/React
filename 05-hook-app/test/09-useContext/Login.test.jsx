import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { Login } from '../../src/09-useContext/Login';
describe('Pruebas en <HomePage/>', () => {
  test('Show component whithout user ', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider
        value={{ user: { username: null }, setUser: setUserMock }}
      >
        <Login />
      </UserContext.Provider>
    );
    fireEvent.click(screen.getByText('Establecer usuario'));
    expect(setUserMock).toHaveBeenCalled();
  });
});
