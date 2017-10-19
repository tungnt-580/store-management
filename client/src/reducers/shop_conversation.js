export default function(state = {comments: []}, action) {
  switch (action.type) {
    case 'FETCH_SHOP_CONVERSATION':
      return action.payload
    default:
      return state
  }
}
