import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateAdminConversation } from '../../../actions'
import Comment from './comment'

class Conversation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }

    this.handleChangeComment = this.handleChangeComment.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  render() {
    const { conversation } = this.props
    const { comment } = this.state

    return (
      <div className="ten wide column">
        <div className="ui comments">
          {conversation.comments.map((comment, index) => (
            <Comment key={index} comment={comment} align={comment.author==='admin' ? 'right' : 'left'}/>
          ))}
        </div>
        <div className="ui form">
          <div className="field">
            <textarea placeholder="Answer him/her" value={comment}
              onChange={this.handleChangeComment} onKeyPress={this.handleKeyPress}>
            </textarea>
          </div>
        </div>
      </div>
    )
  }

  handleChangeComment(e) {
    this.setState({ comment: e.target.value })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { conversation } = this.props
      const { comment } = this.state

      this.props.updateAdminConversation(conversation._id, conversation.comments.concat([{
        message: comment,
        author: 'admin'
      }]))
      this.setState({ comment: '' })
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAdminConversation }, dispatch)
}

export default connect(null, mapDispatchToProps)(Conversation)
