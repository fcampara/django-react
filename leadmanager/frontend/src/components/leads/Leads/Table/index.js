import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import TableUI from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import { withStyles } from '@material-ui/core/styles'

import { Header } from './header'
import { TableToolbar } from './toolbar'

import { tableStyles as styles } from './Style/tableStyles'

import { getLeads, deleteLeads } from '../../../../actions/leads'

class index extends Component {

  componentDidMount () {
    this.props.getLeads()
  }

  constructor(props) {
    super(props)
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      page: 0,
      rowsPerPage: 5
    }

    this.onDelete = () => {
      this.props.deleteLeads(this.state.selected)
    }

    this.handleClick = (event, id) => {
      const { selected } = this.state;
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      this.setState({ selected: newSelected });
    }

    this.handleSelectAllClick = ({ target: { checked }}) => {
      const { leads } = this.props
      if (checked) {
        this.setState(state => ({ selected: leads.map(n => n.id) }))
        return
      }
      this.setState({ selected: [] })
    }

    this.isSelected = id => this.state.selected.indexOf(id) !== -1;
  }

  render() {
    const { selected } = this.state
    const { classes, leads } = this.props

    return (
      <Grid>
        <TableToolbar
          numSelected={selected.length}
          onDelete={this.onDelete}
        />
        <TableUI>
          <Header
            rowCount={leads.length}
            onSelectAllClick={this.handleSelectAllClick}
            numSelected={selected.length}
          />
          <TableBody>
            {leads && leads.map((lead) => {
              const isSelected = this.isSelected(lead.id)
              return (
                <TableRow
                  hover
                  key={lead.id}
                  role="checkbox"
                  selected={isSelected}
                  onClick={event => this.handleClick(event, lead.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} />
                  </TableCell>
                  <TableCell align="right"> {lead.id} </TableCell>
                  <TableCell align="left"> {lead.name}</TableCell>
                  <TableCell align="left"> {lead.email}</TableCell>
                  <TableCell align="left"> {lead.message}</TableCell>
                  <TableCell align="left"> {lead.created_at}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </TableUI>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export const Table = connect(mapStateToProps, { getLeads, deleteLeads })(withStyles(styles)(index))