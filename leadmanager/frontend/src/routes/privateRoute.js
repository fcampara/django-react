import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const privateRoute = ({ isAuthenticated, path, component: Component }) => {
  return <Route path={ path } render={ props => {
    if (!path) {
      return <Redirect to='/leads' />
    }
    if (isAuthenticated) {
      return <Component { ...props } />
    } else {
      return <Redirect to='/login' />
    }
  }} />
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export const PrivateRoute = connect(mapStateToProps)(privateRoute)