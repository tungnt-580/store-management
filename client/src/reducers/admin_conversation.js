export default function(state = {comments: []}, action) {
  switch (action.type) {
    case 'FETCH_ADMIN_CONVERSATION':
      return action.payload
    default:
      return state
  }
}
