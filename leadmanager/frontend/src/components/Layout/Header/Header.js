import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { withStyles } from '@material-ui/core/styles'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

import { Drawer } from '../Drawer'
import { styles } from './HeaderStyle'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  onToggle = (open) => {
    this.setState({ open })
  }

  render () {
    const { classes } = this.props
    const { open } = this.state
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={() => this.onToggle(true)}>
              <MenuIcon/>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Lead Manager
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
          <Drawer open={open} onToggle={this.onToggle}/>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
