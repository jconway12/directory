import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class BreedListComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBreedList();
    }

    // going to have a click on each LI to get to the "Search by breed page" with automatic fill of that breed
    render() {
        if (this.props.breedList != null) {
            return (
                <>
                    <h2>Breeds</h2>
                    <ul>
                    {Object.keys(this.props.breedList.message).map(breed => {
                        return <Link to={`/dog-by-breed?breed=${breed}`}><li id={breed}>{breed}</li></Link>
                    })}
                    </ul>
                </>
            )
        } else {
            return null;
        }
    }
}

export default withRouter(BreedListComponent);