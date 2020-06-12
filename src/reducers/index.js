import { combineReducers } from 'redux';
import StockReducer from './reducer-stock';
import userReducer from './reducer-user';
export default combineReducers({
    stock: StockReducer,
    user: userReducer
});