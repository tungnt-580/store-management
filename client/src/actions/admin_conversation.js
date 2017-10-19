import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

export function fetchAdminConversation(id) {
  return dispatch => {
    fetch(`/api/v1/conversations/${id}`)
      .then(res => {
        if (res.status === 404) {
          throw res
        }
        if (res.ok) return res.json()
      }).then(data => {
        dispatch({
          type: 'FETCH_ADMIN_CONVERSATION',
          payload: data
        })
      }).catch(err => {
        console.log(err)
      })
  }
}

export function updateAdminConversation(id, comments) {
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
        type: 'FETCH_ADMIN_CONVERSATION',
        payload: data
      })
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
