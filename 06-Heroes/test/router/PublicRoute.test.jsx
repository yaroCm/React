const { render, screen } = require('@testing-library/react');
const { MemoryRouter, Routes, Route } = require('react-router-dom');
const { AuthContext } = require('../../src/auth/context/AuthContext');
const { PublicRoute } = require('../../src/router/PublicRoute');

describe('test <PublicRoute/>', () => {
  test('should show children if it isnt logging it ', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <div>Testing Public Route</div>
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.findByText('Testing Public Route')).toBeTruthy();
  });

  test('should navigate if its logged', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: 'JordiCruz',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='login'
              element={
                <PublicRoute>
                  <div>Testing Public Route</div>
                </PublicRoute>
              }
            />
            <Route path='marvel' element={<div>Marvel test page</div>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByText('Marvel test page')).toBeTruthy();
  });
});
