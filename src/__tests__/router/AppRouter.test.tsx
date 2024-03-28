import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { AppRouter } from '../../router/AppRouter';

describe('Tests on <AppRouter />', () => {
  test('should show the login if is not logged in', () => {

    const contextValue = {
      logged: false,
      login: () => {},
      logout: () => {},
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getAllByText('Login')).toHaveLength(2);
  });

  test('should render the Marvel PAge if logged in', () => {
    const contextValue = {
      logged: true,
      user: {
        id: new Date().toISOString(),
        name: 'Cristian'
      },
      login: () => {},
      logout: () => {},
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect( screen.getByRole('navigation') ).toBeTruthy();
    expect( screen.getByText(contextValue.user.name).innerHTML ).toBeTruthy();
    expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
  });
});