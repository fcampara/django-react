import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import Form from './form'

class index extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = (value, name) => {
    console.log(value, name)
  }

  render() {
    const { username, password } = this.state
    return (
      <Paper>
        <Form
          username={username}
          password={password}
          onChange={this.onChange}
        />
        <Button>
            Login
        </Button>
      </Paper>
    )
  }
}

export const Login = index