import { createContext } from 'react';

export type User = {
  id?: string;
  name?: string;
}

export type State = {
  user?: User,
  logged: boolean,
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<State>({ logged: false, login: () => {}, logout: () => {} });
