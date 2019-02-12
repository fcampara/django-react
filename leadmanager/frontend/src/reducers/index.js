import { combineReducers } from 'redux'
import auth from './auth'
import leads from './leads'
import notifier from './notifier'

export default combineReducers({
  auth,
  leads,
  notifier
})
