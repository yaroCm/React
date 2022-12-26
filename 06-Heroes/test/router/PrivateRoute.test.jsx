const { screen, render } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { AuthContext } = require('../../src/auth/context/AuthContext');
const { PrivateRoute } = require('../../src/router/PrivateRoute');

describe('Test <PrivateRoute/>', () => {
  test('should show children if it is logging it ', () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: 'jordi',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <div>Testing Public Route</div>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.findByText('Testing Public Route')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  });
});
