import React from 'react'

import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import MaterialListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { routes } from '../../../routes'

export default function ListItem(props) {
  return (
    <List>
      {routes.map((route, index) => (
        route.show && <MaterialListItem key={index} button component={Link} to={route.path}>
          <ListItemText primary={route.name}/>
        </MaterialListItem>
      ))}
    </List>
  )
}
