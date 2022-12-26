const { render, screen } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { AuthContext } = require('../../src/auth/context/AuthContext');
const { AppRouter } = require('../../src/router/AppRouter');

describe('test <Approuter/>', () => {
  test('Should Show Loggin', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
  test('Should Show Marvel', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: 'yaro',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('MarvelPage')).toBeTruthy();
  });
});
