import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack'
import { bindActionCreators } from 'redux'
import { removeSnackbar } from '../../actions/notifier'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayed: []
    }
  }

  storeDisplayed = id => {
    this.setState({ displayed: [...this.state.displayed, id]})
  }

  shouldComponentUpdate({ notifications: newSnacks = [] }) {
    const { notifications: currentSnacks } = this.props
    let notExists = false
    for (let i = 0; i < newSnacks.length; i++) {
      if (notExists) continue
      notExists = notExists || !currentSnacks.filter(({ key }) => newSnacks[i].key === key).length
    }
    return notExists
  }

  componentDidUpdate() {
    const { displayed } = this.state
    const { notifications = [] } = this.props
    notifications.forEach(notification => {
        if (displayed.includes(notification.key)) return
        this.props.enqueueSnackbar(notification.message, notification.options)
        this.storeDisplayed(notification.key)
        this.props.removeSnackbar(notification.key)
      })

    }

  render() {
    return null
  }
}

const mapStateToProps = store => ({
  notifications: store.notifier.notifications
})

const mapDispatchToProps = dispatch => bindActionCreators({ removeSnackbar }, dispatch)

export const Notifier = connect(mapStateToProps, mapDispatchToProps)(withSnackbar(index))