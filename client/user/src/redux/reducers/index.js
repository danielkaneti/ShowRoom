import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducers from './productReducers';

//combines multiple reducers
const rootReucer = combineReducers({
  user: userReducer,
  product: productReducers,
})

export default rootReucer;