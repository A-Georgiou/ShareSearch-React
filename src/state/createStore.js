import { createStore, combineReducers  } from "redux";
import StockReducer from '../reducers/reducer-stock';
import allReducers from '../reducers'

const generatedStore = createStore(allReducers);
export default generatedStore