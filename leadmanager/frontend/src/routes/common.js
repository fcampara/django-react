import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Login } from '../components/Authenticate/Login'
import { Register } from '../components/Authenticate/Register'

export class CommonRoutes extends Component {
  render() {
    console.log('common')
    return (
      <div>
        <Route path='/login' component={ Login }/>
        <Route path='/register' component={ Register }/>
      </div>
    )
  }
}
