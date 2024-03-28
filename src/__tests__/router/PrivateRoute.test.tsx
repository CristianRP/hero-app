import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../auth';
import { PrivateRoute } from '../../router/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests on <PrivateRoute />', () => {
  
  test('should save the user on the local storage ', () => {

    Storage.prototype.setItem = jest.fn();

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
        <MemoryRouter initialEntries={['/search?q=flash']}>
          <PrivateRoute>
            <h1>Public Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Public Route') ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalled();
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=flash');
  });

});