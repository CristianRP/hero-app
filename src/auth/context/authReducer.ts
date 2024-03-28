import { types } from '../types/types';

export type Action = {
  type: string;
  payload?: object;
}

export const authReducer = ( state = {}, action: Action ) => {
  switch ( action.type ) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
}
