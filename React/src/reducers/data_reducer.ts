
import { RECEIVE_RANDOM_DOG } from "../actions/data_actions";

// Updates user state on fetch and login
const DataReducer = (state = {}, action: any) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RANDOM_DOG: {
            const newState = Object.assign({}, state);
            newState['random_dog'] = action.dog;
            return Object.assign({}, newState);
        }
        default:
            return state;
    }
}

export default DataReducer;