import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigation = useNavigate();

  const onLogin = () => {
    navigation('/', {
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
