import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
