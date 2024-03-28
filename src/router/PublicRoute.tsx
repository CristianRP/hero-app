import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, RoutesProps } from 'react-router-dom';

export const PublicRoute = ({ children }: RoutesProps) => {
  const { logged } = useContext( AuthContext );

  return logged
    ? <Navigate to='/' />
    : children;
}
