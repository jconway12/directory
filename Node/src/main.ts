import * as http from 'http';
import * as debug from 'debug';
import App from './app';
import { config } from './config/config';

debug('ts-express:server');

function normalizePort(val: number | string): number | string | boolean {
    const portNumber: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(portNumber)) return val;
    else if (portNumber >= 0) return portNumber;
    else return false;
}

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;
    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.info(`Listening on ${bind}`);
}

const port = normalizePort(config.port);
App.set('port', port);
const server = http.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
server.timeout = 1000000;
