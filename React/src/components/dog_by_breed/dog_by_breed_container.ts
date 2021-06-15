import { connect } from 'react-redux';
import DogByBreedComponent from './dog_by_breed';
import { getDogByBreed, getBreedList } from '../../actions/data_actions'

const msp = state => {
    const dogByBreed = state.entities.data.dog_by_breed;
    const breedList = state.entities.data.breed_list;
    return { dogByBreed, breedList };
}

const mdp = dispatch => {
    return {
        getDogByBreed: (breed) => dispatch(getDogByBreed(breed)),
        getBreedList: () => dispatch(getBreedList())
    };
}

// Maps state and dispatch function to create homepage container
export default connect(msp, mdp)(DogByBreedComponent);