import { combineReducers } from 'redux'
import adminProducts from './admin_products'
import shopProducts from './shop_products'
import adminConversation from './admin_conversation'
import shopConversation from './shop_conversation'

const rootReducer = combineReducers({
  adminProducts,
  shopProducts,
  adminConversation,
  shopConversation
});

export default rootReducer
