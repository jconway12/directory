import { combineReducers } from "redux";
import DataReducer from './data_reducer';

// Combines entity reduces
export default combineReducers({
    data: DataReducer,
});