import { connect } from 'react-redux';
import BreedListComponent from './breed_list';
import { getBreedList } from '../../actions/data_actions'

const msp = state => {
    const breedList = state.entities.data.breed_list;
    return { breedList };
}

const mdp = dispatch => {
    return {
        getBreedList: () => dispatch(getBreedList()),
    };
}

// Maps state and dispatch function to create homepage container
export default connect(msp, mdp)(BreedListComponent);