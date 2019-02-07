import React, { Component } from 'react'

import { Table } from './Table'

import Grid from '@material-ui/core/Grid'
class index extends Component {

  render() {
    return (
      <div>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Table/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export const Leads = index