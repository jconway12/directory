import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class DogByBreedComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        if (this.props.location.search != null) {
            this.state = { "breed": this.props.location.search.substring(7) };
        } else {
            this.state = { "breed": null };
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if(this.props.breedList == null) {
            this.props.getBreedList();
        } else {
            if (this.state.breed != null) {
                this.props.getDogByBreed(this.state.breed);
            }
        }
    }

    handleClick(breed) {
        this.setState({breed});
        this.props.getDogByBreed(breed);
    }

    // going to have a click on each LI to get to the "Search by breed page" with automatic fill of that breed
    render() {
        const dogImage = this.props.dogByBreed ? <img src={this.props.dogByBreed.message} alt="random_dog_img" /> : null;
        if (this.props.breedList == null) {
            return null;
        } else {
            return (
                <>
                    <InputLabel id="label">Select Breed</InputLabel>
                    <Select labelId="label" id="select" value={this.state.breed}>
                        {Object.keys(this.props.breedList.message).map(breed => {
                            return <MenuItem value={breed} onClick={() => this.handleClick(breed)}>{breed}</MenuItem>;
                        })}
                    </Select>
                    {dogImage}
                </>
            )
        }
    }
}

export default withRouter(DogByBreedComponent);