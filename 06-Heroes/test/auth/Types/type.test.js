const { types } = require('../../../src/auth/Types/types');

describe('Test of types ', () => {
  test('should have this values', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] logout',
    });
  });
});
