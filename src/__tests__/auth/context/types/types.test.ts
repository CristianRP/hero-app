import { types } from '../../../../auth';

describe('Tests on types.ts', () => {
  test('should return types', () => {
    expect( types ).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});