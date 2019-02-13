import { LOAD_USER, LOGIN_USER, LOGOUT_USER } from "../actions/types"

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case LOAD_USER:
      console.log('LOAD_USER')
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }

    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }

    case LOGOUT_USER:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false
      }

    default:
      return state
  }
}