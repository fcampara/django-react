import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function form(props) {
  const { email, password, onChange } = props
  return (
    <Grid container spacing={32}>
      <Grid item xs={12}>
          <TextField
            fullWidth
            value={email}
            label={'Email'}
            onChange={e => {onChange(e.currentTarget.value, 'email')}}
          />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          value={password}
          label={'Password'}
          onChange={e => {onChange(e.currentTarget.value, 'password')}}
        />
      </Grid>
    </Grid>
  )
}
