import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { SnackbarProvider } from 'notistack'

import { Provider } from 'react-redux'
import store from '../store'

import { theme } from '../theme'
import { Header } from './Layout/Header'
import { Dashboard } from './Leads/Dashboard'
import { Notifier } from './Notifier'
import { Login } from './Authenticate/Login'
import { Register } from './Authenticate/Register'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
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
              <Fragment>
                  <CssBaseline/>
                  <Notifier/>
                  <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                  </Switch>
              </Fragment>
            </MuiThemeProvider>
          </Router>
        </SnackbarProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))