export function fetchAdminProducts() {
  return dispatch => {
    fetch('/api/v1/products')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_ADMIN_PRODUCTS',
          payload: data
        })
      });
  }
}

export function deleteAdminProduct(id) {
  return dispatch => {
    fetch(`/api/v1/products/${id}`, {
      method: 'delete'
    }).then((res) => {
      if (res.ok) dispatch({
        type: 'DELETE_ADMIN_PRODUCT',
        payload: id
      })
    });
  }
}
