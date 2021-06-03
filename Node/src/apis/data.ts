import { config } from '../config/config';
import axios from 'axios';
// import * as utils from '../utils';

export class DataApis {
    
    public async getRandomDog() {
        const endpoint = config.random_dog_endpoint;

        return axios.get(endpoint).then(response => {
            console.log('random dog - full response', response);
            return response.data;
        }).catch(err => {
            console.error(err);
            throw err;
        });
    }

    public async listBreeds() {
        const endpoint = config.all_breeds_endpoint;

        return axios.get(endpoint).then(response => {
            console.log('all breeds - full response', response);
            return response.data;
        }).catch(err => {
            console.error(err);
            throw err;
        });
    }

    public async getRandomDogByBreed(breed: String) {
        let endpoint = config.random_from_breed_endpoint;
        endpoint = endpoint + breed + '/images/random';

        return axios.get(endpoint).then(response => {
            console.log('random by breed - full response', response);
            return response.data;
        }).catch(err => {
            console.error(err);
            throw err;
        });
    }

    public async getDogsByBreed(breed: String) {
        let endpoint = config.dogs_by_breed_endpoint;
        endpoint = endpoint + breed + '/images';

        return axios.get(endpoint).then(response => {
            console.log('get dogs by breed - full response', response);
            return response.data;
        }).catch(err => {
            console.error(err);
            throw err;
        });
    }

    public async getSubBreeds(breed: String) {
        let endpoint = config.sub_breed_endpoint;
        endpoint = endpoint + breed + '/list';

        return axios.get(endpoint).then(response => {
            console.log('get sub breeds - full response', response);
            return response.data;
        }).catch(err => {
            console.error(err);
            throw err;
        });
    }
}