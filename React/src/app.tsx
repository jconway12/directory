import React from "react";
import './styles/styles.css';
import { Route, Switch } from 'react-router-dom';
import RandomDogContainer from './components/random_dog/random_dog_container';
import HomepageComponent from './components/homepage/homepage';
import BreedListContainer from "./components/breed_list/breed_list_container";
import DogByBreedContainer from "./components/dog_by_breed/dog_by_breed_container";

// Wraps app component with store and router
const App = ({ store }) => {
    return (
        <>
        <HomepageComponent />
        <Switch>
            <BreedListContainer path="/breed-list" />
            <DogByBreedContainer path={["/dog-by-breed", "/dog-by-breed?breed=:searchValue"]} />
            <RandomDogContainer path="/" />
        </Switch>
        </>
    )
}

export default App;