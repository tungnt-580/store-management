import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import Conversation from './conversation'

const socket = openSocket('http://localhost:8000')

class Supports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conversation: {
        comments: []
      }
    }

    this.getConversation = this.getConversation.bind(this)
    this.createConversation = this.createConversation.bind(this)
    this.updateConversation = this.updateConversation.bind(this)
  }

  componentDidMount() {
    this.getConversation()

    socket.on('admin', ({ message, from }) => {
      if (message === 'new comment') {
        this.getConversation()
      }
    })
  }

  render() {
    const { conversation } = this.state

    return (
      <div className="ui grid" style={{paddingTop: 20}}>
        <h1 className="ui header">
          Customers support
        </h1>
        <Conversation conversation={conversation} onSubmitComment={this.updateConversation}/>
      </div>
    )
  }

  getConversation() {
    fetch('/api/v1/conversations/put-id-here')
      .then(res => {
        if (res.status === 404) {
          throw res
        }
        if (res.ok) return res.json()
      }).then(data => {
        this.setState({ conversation: data })
      }).catch(err => {
        console.log(err)
      })
  }

  createConversation() {
    const user = { name: 'Matt' }
    fetch('/api/v1/conversations', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        members: ['admin', user.name],
        comments: [{
          message: `Hi, ${user.name}! How was your day?`,
          author: 'admin'
        }]
      })
    }).then(res => res.json())
      .then(data => { this.setState({ conversation: data }) })
  }

  updateConversation(id, comments) {
    fetch(`/api/v1/conversations/${id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comments })
    }).then(res => {
      if (res.ok) return res.json()
      if (res.status === 422) throw res
    }).then(data => {
      this.setState({ conversation: data })
      socket.emit('notify', {
        message: 'new comment',
        from: 'admin',
        to: 'Matt'
      })
    }).catch(err => {
        console.log(err)
      })
  }
}

export default Supports
