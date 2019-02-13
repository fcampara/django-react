import { axios } from '../axios'
import { LOGIN, LOGOUT, LOAD_USER } from './types'
import { enqueueSnackbar } from './notifier'

const USER = `user`

export const loadUser = () => (dispatch) => {
  axios.get(`auth/${USER}`).then(res => {
    dispatch({
      type: LOAD_USER,
      payload: res.data
    })
  }).catch(err => {
    store.dispatch(enqueueSnackbar({
      message: 'Wrong in login',
      options: {
          variant: 'error'
      }
    }))
  })
}