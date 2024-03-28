import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../ui';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth';
import { act } from 'react-dom/test-utils';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Tests on <Navbar /> component', () => {
  const contextValue = {
    logged: true,
    user: {
      id: new Date().toISOString(),
      name: 'Cristian'
    },
    login: jest.fn(),
    logout: jest.fn(),
  }

  beforeEach(() => jest.clearAllMocks());

  test('should show the user name', () => {

    render(
      <MemoryRouter>
        <AuthContext.Provider value={ contextValue } >
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect( screen.getByText(contextValue.user.name) ).toBeTruthy();
  });

  test('should call the logout and navigate when click on the button', async () => {

    render(
      <MemoryRouter>
        <AuthContext.Provider value={ contextValue } >
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const openUserMenuButton = screen.getByRole('button', { name: 'Open user menu'});
    expect( openUserMenuButton ).toBeTruthy();
    await act(async () => {
      fireEvent.click(openUserMenuButton)
    });
    

    const signOutButton = screen.getByRole('menuitem', { name: 'Sign out' });
    expect( signOutButton ).toBeTruthy();
    fireEvent.click(signOutButton);

    expect( contextValue.logout ).toHaveBeenCalled();
    expect( mockUseNavigate ).toHaveBeenCalled();
    expect( mockUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true});

  });
});