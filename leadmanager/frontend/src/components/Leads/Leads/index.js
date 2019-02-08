import React, { Component } from 'react'

import { Table } from './Table'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
class index extends Component {

  render() {
    return (
      <div>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Paper style={{overflowX: 'auto', margin: 10}} elevation={2}>
              <Table/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export const Leads = index