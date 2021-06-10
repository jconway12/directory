import React from 'react';
// import { withRouter } from 'react-router-dom';

class RandomDogComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.getRandomDog();
    }

    render() {
        return (
            <>
                <button onClick={this.onClick}>Get Random Dog!</button>
            </>
        )
    }
}

export default RandomDogComponent;