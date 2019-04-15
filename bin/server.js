
const app = require('../src/app')
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error ', onError);
server.on('listening', onListening);

console.log('API rodando na port ' + port);

// faz a API ultilizar um porta disponivel 
function normalizePort(val) {
    const port = parseInt(val, 10);

    // se o valor não for um numero retorna 10
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false;
}
// Erros da api
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bing + 'requer privilégio elevado');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bing + ' já está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addf === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
