import { connect } from 'react-redux';
import RandomDogComponent from './random_dog';
import { getRandomDog } from '../../actions/data_actions'

const mdp = dispatch => {
    return {
        getRandomDog: () => dispatch(getRandomDog()),
    };
}

// Maps state and dispatch function to create homepage container
export default connect(null, mdp)(RandomDogComponent);