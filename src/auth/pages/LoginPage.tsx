import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigation = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
 
    login('Cristian Ramirez');

    navigation(lastPath, {
      replace: true
    })
  }

  return (
    <div className="pl-14 mt-5">
      <h1 className='text-3xl mb-5'>Login</h1>
      <hr className='mb-5' />
      <button
        className='bg-blue-600 text-white p-2 rounded-md'
        onClick={ onLogin }
        >
        Login
      </button>
    </div>
  )
}
