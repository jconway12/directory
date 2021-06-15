
import * as DataUtil from '../util/data_api_util';

// User action constants
export const RECEIVE_RANDOM_DOG = 'RECEIVE_RANDOM_DOG';
export const RECEIVE_BREED_LIST = 'RECEIVE_BREED_LIST';
export const RECEIVE_DOG_BY_BREED = 'RECEIVE_DOG_BY_BREED';

// Fetches user and sends user response to reducers
export const getRandomDog = () => (dispatch: any) => {
    return DataUtil.getRandomDog().then(response => {
        dispatch({ type: RECEIVE_RANDOM_DOG, dog: response.data })
    });
}

export const getBreedList = () => (dispatch: any) => {
    return DataUtil.getBreedList().then(response => {
        dispatch({ type: RECEIVE_BREED_LIST, breedList: response.data })
    });
}

export const getDogByBreed = (breed: String) => (dispatch: any) => {
    return DataUtil.getDogByBreed(breed).then(response => {
        dispatch({ type: RECEIVE_DOG_BY_BREED, dogByBreed: response.data })
    });
}
