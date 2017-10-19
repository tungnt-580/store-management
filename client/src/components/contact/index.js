import React, { Component } from 'react'
import openSocket from 'socket.io-client'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchShopConversation, createShopConversation } from '../../actions'
import Conversation from './conversation'

const socket = openSocket('http://localhost:8000')

class Contact extends Component {
  componentDidMount() {
    this.props.fetchShopConversation('id')

    socket.on('Matt', ({ message, from }) => {
      if (message === 'new comment') {
        this.props.fetchShopConversation('id');
      }
    })
  }

  render() {
    const conversation = this.props.shopConversation

    return (
      <div className="ui grid" style={{paddingTop: 30}}>
        <h1 className="ui header">
          <i className="comments icon"></i>
          Contact
        </h1>
        <Conversation conversation={conversation} />
      </div>
    )
  }
}

function mapStateToProps({ shopConversation }) {
  return { shopConversation }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchShopConversation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
