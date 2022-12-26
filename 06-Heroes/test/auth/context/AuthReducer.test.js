const { authReducer } = require('../../../src/auth/context/authReducer');
const { types } = require('../../../src/auth/Types/types');

describe('Pruebas Auth Reducer', () => {
  test('should return default value', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('should Create the User', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Yarito',
        id: 123,
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('should Delete the User', () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, user: action.payload }, action);
    expect(state).toEqual({
      logged: false,
    });
  });
});
