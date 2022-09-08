import socketClient from 'socket.io-client';
import config from 'config';

let domain: string = config.SOCKETIO_DOMAIN;

if (process.env.NODE_ENV === 'development') {
  domain = `${config.SOCKETIO_DOMAIN}:${config.PORT}`;
}

export const socket = socketClient(domain);
