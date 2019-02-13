import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// import { PrivateRoutes } from './privateRoutes'
import { PrivateRoute } from './privateRoute'
import { Login } from '../components/Authenticate/Login'
import { Register } from '../components/Authenticate/Register'
import { Dashboard } from '../components/Leads/index'

class renderRoutes extends Component {
  render () {
    return (
      <Switch>
        <Route path='/login' component={ Login }/>
        <Route path='/register' component={ Register }/>
        <PrivateRoute path='/leads' component={ Dashboard } />
        <PrivateRoute component={ Dashboard } />
      </Switch>
    )
  }
}

export const RenderRoutes = renderRoutes
