import { render, screen } from '@testing-library/react';
import { Home } from '../../src/09-useContext/Home';
import { UserContext } from '../../src/09-useContext/context/UserContext';
describe('Pruebas en <HomePage/>', () => {
  test('Show component whithout user ', () => {
    render(
      <UserContext.Provider value={{ user: { username: null } }}>
        <Home />
      </UserContext.Provider>
    );
    expect(screen.getByText('Welcome')).toBeTruthy();
  });
});
