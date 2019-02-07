import { axios } from '../axios'
import { GET_LEADS, DELETE_LEAD, SAVE_LEAD } from './types'

const LEADS = `leads`

export const getLeads = () => dispatch => {
  axios.get(`/${LEADS}/`).then(({ data }) => {
    dispatch({
      type: GET_LEADS,
      payload: data
    })
  })
}

export const deleteLeads = (ids) => dispatch => {
  for (let id of ids) {
    axios.delete(`/${LEADS}/${id}/`).then(() => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    })
  }
}

export const saveLead = (payload) => dispatch => {
  axios.post(`/${LEADS}`, {...payload}).then((data) => {
    dispatch({
      type: SAVE_LEAD,
      payload: data
    })
  })
}