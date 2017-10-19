import React, { Component } from 'react'
import openSocket from 'socket.io-client'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchAdminConversation } from '../../../actions'
import Conversation from './conversation'

const socket = openSocket('http://localhost:8000')

class Supports extends Component {
  componentDidMount() {
    this.props.fetchAdminConversation('id')

    socket.on('admin', ({ message, from }) => {
      if (message === 'new comment') {
        this.props.fetchAdminConversation()
      }
    })
  }

  render() {
    const conversation = this.props.adminConversation

    return (
      <div className="ui grid" style={{paddingTop: 20}}>
        <h1 className="ui header">
          Customers support
        </h1>
        <Conversation conversation={conversation} />
      </div>
    )
  }

}

function mapStateToProps({ adminConversation }) {
  return { adminConversation }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAdminConversation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Supports)
