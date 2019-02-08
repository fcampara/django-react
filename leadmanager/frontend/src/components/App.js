import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import Button from '@material-ui/core/Button'

import { SnackbarProvider } from 'notistack'

import { Provider } from 'react-redux'
import store from '../store'

import { Header } from './Layout/Header'
import { Dashboard } from './Leads/Dashboard'
import { Notifier } from './Notifier'

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
          <Fragment>
            <Header />
            <Dashboard />
            <Notifier/>
          </Fragment>
        </SnackbarProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))