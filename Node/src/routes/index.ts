'use strict';
import * as Express from 'express';
import * as bodyParser from 'body-parser';
import DataRouter from './data';

export function serverRoutes(app: Express.Application): Express.Router {
    const router: Express.Router = Express.Router();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    router.use('/data', DataRouter(app));

    return router;
}

export default serverRoutes;