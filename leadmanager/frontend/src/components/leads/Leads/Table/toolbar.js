import React, { Component } from 'react'
import classNames from 'classnames'

import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import FilterListIcon from '@material-ui/icons/FilterList'
import DeleteIcon from '@material-ui/icons/Delete'

import { toolbarStyles } from './Style/toolbarStyles'
import Typography from '@material-ui/core/Typography'

export class TableToolbar extends Component {
  render() {
    const { numSelected, onDelete, classes } = this.props

    return (
        <Toolbar
          className={classNames(classes.root, {
            [classes.highlight]: numSelected > 0,
          })}
        >
          <div className={classes.title}>
            {numSelected > 0 ? (
              <Typography color="inherit" variant="subtitle1">
                {numSelected} Selected
              </Typography>
            ) : (
              <Typography variant="h6" id="tableTitle">
                Leads
              </Typography>
            )}
          </div>
          <div className={classes.spacer} />
          <div className={classes.actions}>
            {numSelected > 0 ? (
              <Tooltip title="Delete">
                <IconButton aria-label="Delete" onClick={onDelete}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Filter list">
                <IconButton aria-label="Filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </Toolbar>
      );
  }
}

TableToolbar = withStyles(toolbarStyles)(TableToolbar)