import store from './store'
import instance from 'axios'
import { enqueueSnackbar } from './actions/notifier'

const token = store.getState().auth.token

const Axios = instance.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  },
  validateStatus: (status) => {
    switch (status) {
      case 401:
        store.dispatch(enqueueSnackbar({
          message: 'Authentication credentials invalid',
          options: {
            variant: 'warning'
          }
        }))
        return false

      default:
        return true
    }
  }
})

export const axios = Axios