'use strict';

import * as Express from 'express';
import controller from './data.route.controller';


export default function (app: Express.Application): Express.Router {
    const router: Express.Router = Express.Router();
    router.post('/getRandomDog', controller.getRandomDog);
    router.post('/listBreeds', controller.listBreeds);
    router.post('/getRandomDogByBreed', controller.getRandomDogByBreed);
    router.post('/getDogsByBreed', controller.getDogsByBreed);
    router.post('/getSubBreeds', controller.getSubBreeds);

    return router;
}