
import { RECEIVE_RANDOM_DOG, RECEIVE_BREED_LIST, RECEIVE_DOG_BY_BREED } from "../actions/data_actions";

// Updates user state on fetch and login
const DataReducer = (state = {}, action: any) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RANDOM_DOG: {
            const newState = Object.assign({}, state);
            newState['random_dog'] = action.dog;
            return Object.assign({}, newState);
        }
        case RECEIVE_BREED_LIST: {
            const newState = Object.assign({}, state);
            newState['breed_list'] = action.breedList;
            return Object.assign({}, newState);
        }
        case RECEIVE_DOG_BY_BREED: {
            const newState = Object.assign({}, state);
            newState['dog_by_breed'] = action.dogByBreed;
            return Object.assign({}, newState);
        }
        default:
            return state;
    }
}

export default DataReducer;