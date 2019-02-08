import { combineReducers } from 'redux'
import leads from './leads'
import notifier from './notifier'

export default combineReducers({
  leads,
  notifier
})
