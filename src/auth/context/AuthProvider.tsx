import { useReducer } from 'react'
import { AuthContext, State } from './AuthContext'
import { Action, authReducer } from './authReducer'
import { types } from '../types/types'
import { RoutesProps } from 'react-router-dom'

type DispatchAction = (action: Action) => void;

const initialState: State = {
  logged: false,
  login: () => {},
  logout: () => {},
};

type AuthState = State | object;

const init = (): State => {
  const user = JSON.parse(localStorage.getItem('user')!);

  return {
    ...initialState,
    logged: !!user,
    user: user || null,
  } || undefined
}

export const AuthProvider = ({ children }:RoutesProps ) => {

  const [ authState, dispatch ]: [AuthState, DispatchAction] = useReducer( authReducer, initialState, init );

  const login = ( name: string ) => {
    const user = {
      id: new Date().toISOString(),
      name,
    }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout
    }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ ...authState, logged: (authState as State).logged, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
