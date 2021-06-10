import React from "react";
import './styles/styles.css';
import IMAGE from './assets/logo.png';
import { Provider } from 'react-redux';
import RandomDogContainer from './components/random_dog/random_dog_container';

// Wraps app component with store and router
const App = ({ store }) => {
    return (
        <Provider store={store}>
            <h1>React App</h1>
            <RandomDogContainer />
            <img src={IMAGE} alt='logo' />
        </Provider>
    )
}

export default App;