import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../router/PublicRoute';
import { AuthContext } from '../../auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Tests on <PublicRoute />', () => {
  test('should show the children if is not logged in', () => {

    const contextValue = {
      logged: false,
      login: () => {},
      logout: () => {},
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Public Route') ).toBeTruthy();
  });

  test('should navigate if is logged in', () => {
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
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Public Route</h1>
              </PublicRoute>
            } />

            <Route path='/' element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Marvel Page') ).toBeTruthy();

  });
});