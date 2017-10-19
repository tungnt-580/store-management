export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_ADMIN_PRODUCTS':
      return action.payload
    case 'DELETE_ADMIN_PRODUCT':
      return state.filter(product => product._id !== action.payload)
    default:
      return state
  }
}
