
import * as DataUtil from '../util/data_api_util';

// User action constants
export const RECEIVE_RANDOM_DOG = 'RECEIVE_RANDOM_DOG';

// Fetches user and sends user response to reducers
export const getRandomDog = () => (dispatch: any) => {
    debugger
    return DataUtil.getRandomDog().then(response => {
        dispatch({ type: RECEIVE_RANDOM_DOG, dog: response.data })
    });
}
