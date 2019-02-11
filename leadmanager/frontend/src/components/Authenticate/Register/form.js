import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function form(props) {
  const { username, email, password, confirmPassword, onChange } = props
  return (
    <Grid container spacing={32}>
      <Grid item xs={12}>
          <TextField
          label={'Username'}
          fullWidth
          value={username}
          onChange={e => {onChange(e.currentTarget.value, 'username')}}
          />
      </Grid>
      <Grid item xs={12}>
          <TextField
          label={'Email'}
          fullWidth
          value={email}
          onChange={e => {onChange(e.currentTarget.value, 'email')}}
          />
      </Grid>
      <Grid item xs={12}>
          <TextField
          label={'Password'}
          fullWidth
          value={password}
          onChange={e => {onChange(e.currentTarget.value, 'password')}}
          />
      </Grid>
      <Grid item xs={12}>
          <TextField
          label={'Confirm Pasword'}
          fullWidth
          value={confirmPassword}
          onChange={e => {onChange(e.currentTarget.value, 'confirmPassword')}}
          />
      </Grid>
    </Grid>
  )
}
