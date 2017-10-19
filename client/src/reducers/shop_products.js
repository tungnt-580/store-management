export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_SHOP_PRODUCTS':
      return action.payload
    default:
      return state
  }
}
