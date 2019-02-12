import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import SaveIcon from '@material-ui/icons/Save'
import ClearIcon from '@material-ui/icons/Clear'

import { saveLead } from '../../../../actions/leads'
import { enqueueSnackbar } from '../../../../actions/notifier'

class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (value, field) => {
    this.setState({ [field]: value })
  }

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  save = () => {
    this.props.saveLead(this.state)
  }

  notifier = () => {
    this.props.enqueueSnackbar({
      message: 'Failed fetching data.',
      options: {
          variant: 'warning',
      },
  });
  }

  render() {
    const { classes } = this.props
    const { name, email, message } = this.state

    return (
      <Paper elevation={1}>
        <Grid container direction="row" spacing={32}>
          <Grid item xs={6}>
            <TextField
              value={name}
              fullWidth
              label={'Name'}
              onChange={e => this.handleChange(e.target.value, 'name')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={email}
              fullWidth
              label={'Email'}
              onChange={e => this.handleChange(e.target.value, 'email')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={message}
              fullWidth
              rows={6}
              label={'Message'}
              multiline
              onChange={e => this.handleChange(e.target.value, 'message')}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={this.save}>
          <SaveIcon/>
            Save
          </Button>
          <Button variant="contained" onClick={this.clearForm}>
            <ClearIcon/>
            Clear
          </Button>
      </Paper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  enqueueSnackbar: (options) => dispatch(enqueueSnackbar(options)),
  saveLead: (name, email, message) => dispatch(saveLead(name, email, message))
})

export const FormsLeads = connect(null, mapDispatchToProps)(index)