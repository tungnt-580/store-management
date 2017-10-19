export function fetchShopProducts(term) {
  return dispatch => {
    fetch(`/api/v1/products?term=${term}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_SHOP_PRODUCTS',
          payload: data
        })
      })
  }
}
