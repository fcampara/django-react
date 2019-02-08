import { axios } from '../axios'
import { GET_LEADS, DELETE_LEAD, SAVE_LEAD } from './types'

import store from '../store'
import { enqueueSnackbar } from '../actions/notifier'


const LEADS = `leads`

export const getLeads = () => dispatch => {
  axios.get(`/${LEADS}/`).then(({ data }) => {
    dispatch({
      type: GET_LEADS,
      payload: data
    })
  }).catch(() => {
    store.dispatch(enqueueSnackbar({
      message: 'Wrong in get leads',
      options: {
        variant: 'error'
      }
    }))
  })
}

export const deleteLeads = (ids) => dispatch => {
  for (let id of ids) {
    axios.delete(`/${LEADS}/${id}/`).then(() => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    }).catch(err => {
      store.dispatch(enqueueSnackbar({
        message: 'Wrong in delete lead',
        options: {
          variant: 'error'
        }
      }))
    })
  }
}

export const saveLead = (payload) => dispatch => {
  axios.post(`/${LEADS}/`, {...payload}).then(({ data }) => {
    dispatch({
      type: SAVE_LEAD,
      payload: data
    })
  }).catch(err => {
    store.dispatch(enqueueSnackbar({
      message: 'Wrong in save lead',
      options: {
        variant: 'error'
      }
    }))
  })
}