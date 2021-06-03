import * as cors from 'cors';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import APIRoutes from './routes';
import { config } from './config/config';

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.config();
    }
    private config(): void {
        this.express.use('/api', APIRoutes(this.express));
    }
    // Configure Express middleware.
    private middleware(): void {
        this.express.use(cookieParser());
        this.express.use(cors());
    }
}
export default new App().express;
