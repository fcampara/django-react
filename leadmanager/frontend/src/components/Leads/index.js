import React, { Component } from 'react'

import { FormsLeads } from './Leads/Forms'
import { Leads } from './Leads'

class index extends Component {
  render() {
    return (
      <div>
        <FormsLeads />
        <Leads />
      </div>
    )
  }
}

export const Dashboard = index
