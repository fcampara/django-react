import React, { Component } from 'react'

import MaterialDrawer from '@material-ui/core/Drawer'

import ListItem from './ListItem'

export class Drawer extends Component {

  render() {
    const { open, onToggle } = this.props
    return (
      <MaterialDrawer open={open} onClose={() => onToggle(false)}>
        <div tabIndex={0} role="button" onClick={() => onToggle(false)} onKeyDown={() => onToggle(false)}>
          <ListItem/>
        </div>
      </MaterialDrawer>
    )
  }
}
