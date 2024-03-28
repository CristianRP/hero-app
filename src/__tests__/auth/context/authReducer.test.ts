import { Action, State, authReducer, types } from '../../../auth';

describe('Tests on authReducer', () => {

  const initialState: State = {
    logged: false,
    login: () => {},
    logout: () => {},
  };

  const user = {
    id: new Date().toISOString(),
    name: 'Cristian',
  }

  test('should return the initialState', () => {
    const action: Action = { type: 'none' };
    const state = authReducer(initialState, action);

    expect( state ).toEqual( initialState );
  });

  test('should call the login fn and set the user', () => {
    const action: Action = {
      type: types.login,
      payload: user
    };

    const state = authReducer({}, action);

    expect( state ).toEqual( { user, logged: true } );
  });

  test('should call logout, delete user and set logged as false', () => {
    const action: Action = {
      type: types.login,
      payload: user
    };

    const loggedState = authReducer({}, action);

    const logoutAction: Action = {
      type: types.logout
    }

    const logoutState = authReducer(loggedState, logoutAction);

    expect( logoutState ).toEqual( { logged: false } );
  });
});
