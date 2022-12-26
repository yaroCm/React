const { render, screen, fireEvent } = require('@testing-library/react');
const { MemoryRouter, useNavigate } = require('react-router-dom');
const { AuthContext } = require('../../src/auth/context/AuthContext');
const { SearchPage } = require('../../src/heroes/pages/SearchPage');
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
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <SearchPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');
  });

  test('Should Show Error', () => {
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
        <MemoryRouter initialEntries={['/search?q=error']}>
          <SearchPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(`We don't found`)).toBeTruthy();
  });
});
