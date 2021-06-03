import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    'port': process.env.SERVER_PORT || '8082',
    'random_dog_endpoint': 'https://dog.ceo/api/breeds/image/random',
    'all_breeds_endpoint': 'https://dog.ceo/api/breeds/list/all',
    'random_from_breed_endpoint': 'https://dog.ceo/api/breed/',
    'dogs_by_breed_endpoint': 'https://dog.ceo/api/breed/',
    'sub_breed_endpoint': 'https://dog.ceo/api/breed/'
}