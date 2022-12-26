const { render, screen, fireEvent } = require('@testing-library/react');
const { MemoryRouter, useNavigate } = require('react-router-dom');
const { AuthContext } = require('../../src/auth/context/AuthContext');
const { Navbar } = require('../../src/ui/components/Navbar');

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));
describe('test <Approuter/>', () => {
  test('Should Show Name', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: 'yaro',
      },
      logOut: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.findByText(contextValue.user.name)).toBeTruthy();
  });
  test('Should Call logOut', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: 'yaro',
      },
      logOut: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(contextValue.logOut).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
