import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import SaveIcon from '@material-ui/icons/Save'
import ClearIcon from '@material-ui/icons/Clear'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: 10,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: 10
  }
});

class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  render() {
    const { classes } = this.props
    const { name, email, message } = this.state

    return (
      <Paper className={classes.root} elevation={1}>
        <Grid container direction="row" spacing={32}>
          <Grid item xs={6}>
            <TextField
              value={name}
              fullWidth
              label={'Name'}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={email}
              fullWidth
              label={'Email'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={message}
              fullWidth
              rows={6}
              label={'Message'}
              multiline
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary">
          <SaveIcon/>
            Save
          </Button>
          <Button className={classes.button} variant="contained">
            <ClearIcon/>
            Clear
          </Button>
      </Paper>
    )
  }
}

export const FormsLeads = withStyles(styles)(index)