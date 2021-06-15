import { connect } from 'react-redux';
import RandomDogComponent from './random_dog';
import { getRandomDog } from '../../actions/data_actions'

const msp = state => {
    const randomDog = state.entities.data.random_dog;
    return { randomDog };
}

const mdp = dispatch => {
    return {
        getRandomDog: () => dispatch(getRandomDog()),
    };
}

// Maps state and dispatch function to create homepage container
export default connect(msp, mdp)(RandomDogComponent);