import store from './store'
import instance from 'axios'
import { enqueueSnackbar } from './actions/notifier'


const Axios = instance.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 1000,
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