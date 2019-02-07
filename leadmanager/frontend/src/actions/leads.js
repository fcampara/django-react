import { axios } from '../axios'
import { GET_LEADS, DELETE_LEAD } from './types'

export const getLeads = () => dispatch => {
  axios.get('/leads/').then(({ data }) => {
    dispatch({
      type: GET_LEADS,
      payload: data
    })
  })
}

export const deleteLeads = (ids) => dispatch => {
  for (let id of ids) {
    axios.delete(`/leads/${id}/`).then(() => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    })
  }
}