import { auth } from './auth'
import { app } from './app'

export const routes = [
  ...app,
  ...auth
]