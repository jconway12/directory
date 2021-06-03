'use strict';
import { DataApis } from '../../apis';

namespace DataController {
    const api = new DataApis();

    export async function getRandomDog(req, res) {
        try {
            const response = await api.getRandomDog();
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    export async function listBreeds(req, res) {
        try {
            const response = await api.listBreeds();
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    export async function getRandomDogByBreed(req, res) {
        const breed: String = req.body.breed;
        try {
            const response = await api.getRandomDogByBreed(breed);
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    export async function getDogsByBreed(req, res) {
        const breed: String = req.body.breed;
        try {
            const response = await api.getDogsByBreed(breed);
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    export async function getSubBreeds(req, res) {
        const breed: String = req.body.breed;
        try {
            const response = await api.getSubBreeds(breed);
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default DataController;