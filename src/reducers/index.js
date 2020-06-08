import { combineReducers } from 'redux';
import StockReducer from './reducer-stock';

export default combineReducers({
    stock: StockReducer
});