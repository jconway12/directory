import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer'
// import ErrorsReducer from "./errors_reducer";

// Combines error, session, and entity reducers to root reducer to be used by store
export default combineReducers({
    entities: EntitiesReducer
})