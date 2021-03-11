import { combineReducers } from 'redux';
import userReducer from './userReducer';

//combines multiple reducers
const rootReucer = combineReducers({
  user: userReducer,
})

export default rootReucer;