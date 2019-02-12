import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { SnackbarProvider } from 'notistack'

import { Provider } from 'react-redux'
import store from '../store'

import { theme } from '../theme'
import { Header } from './Layout/Header'
import { Notifier } from './Notifier'
import CssBaseline from '@material-ui/core/CssBaseline'
import RenderRoutes from '../routes/render'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          action={[
            <Button size="small">
              Close
            </Button>
          ]}
        >
          <Router>
            <MuiThemeProvider theme={theme}>
              <Header />
              <Fragment>
                  <CssBaseline/>
                  <Notifier/>
                  <RenderRoutes/>
              </Fragment>
            </MuiThemeProvider>
          </Router>
        </SnackbarProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))