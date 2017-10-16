import React from 'react'
import moment from 'moment'

const AuthorAndDate = ({ name, date, align }) => {
  let result = [
    <a key="1" className="author">{name}</a>,
    <div key="2" className="metadata">
      <span className="date">{moment(date).calendar()}</span>
    </div>
  ]
  if (align === 'right') result = result.reverse()
  return result
}

const Comment = ({ comment, align }) => (
  <div className={`comment ${align}`} align={align}>
    <a className="avatar">
      {comment.author === "admin" && <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" alt=""/>}
      {comment.author === "Matt" && <img src="https://semantic-ui.com/images/avatar/small/matt.jpg" alt=""/>}
    </a>
    <div className="content">
      <AuthorAndDate name={comment.author} date={comment.sentAt} align={align} />
      <div className="text">
        {comment.message}
      </div>
    </div>
  </div>
)

export default Comment
