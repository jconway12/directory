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
        const randomDogImage = this.props.randomDog ? <img src={this.props.randomDog.message} alt="random_dog_img" /> : null;
        return (
            <>
                    <button className="random-dog-button" onClick={this.onClick}>Get Random Dog!</button>
                    {randomDogImage}
            </>
        )
    }
}

export default RandomDogComponent;