import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from './index'

export default function RenderRoutes() {
  return (
    <Switch>
        {routes.map((route, index) => (
          <Route key={index} exact {...route} />
        ))}
    </Switch>
  )
}
