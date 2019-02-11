import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import Form from './form'

class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  onChange = (value, field) => {
    console.log(value, field)
  }
  render() {
    const { email, username, password, confirmPassword } = this.state
    return (
      <Paper>
        <Form
          email={email}
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          onChange={this.onChange}
        />
      </Paper>
    )
  }
}

export const Register = index