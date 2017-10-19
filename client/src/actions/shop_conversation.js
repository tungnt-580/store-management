import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

export function fetchShopConversation(id) {
  return dispatch => {
    fetch(`/api/v1/conversations/${id}`)
      .then(res => {
        if (res.status === 404) {
          createConversation({name: 'Matt'}, conversation => {
            dispatch({
              type: 'FETCH_SHOP_CONVERSATION',
              payload: conversation
            })
          })
          throw new Error(res)
        }
        if (res.ok) return res.json()
      }).then(data => {
        dispatch({
          type: 'FETCH_SHOP_CONVERSATION',
          payload: data
        })
      }).catch(err => {
        console.log(err)
      })
  }
}

function createConversation(user, callback) {
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
    .then(data => callback(data))
}

export function updateShopConversation(id, comments) {
  return dispatch => {
    fetch(`/api/v1/conversations/${id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comments })
    }).then(res => {
      if (res.ok) return res.json()
      if (res.status === 422) throw res
    }).then(data => {
      dispatch({
        type: 'FETCH_SHOP_CONVERSATION',
        payload: data
      })
      socket.emit('notify', {
        message: 'new comment',
        from: 'Matt',
        to: 'admin'
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
