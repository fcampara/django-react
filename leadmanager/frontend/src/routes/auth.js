import { Login } from '../components/Authenticate/Login'
import { Register } from '../components/Authenticate/Register'

export const auth = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]