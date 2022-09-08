const config = {
  PORT: process.env.PORT || '3000',
  // Is usually the same domain as the backend. (process.env.BACKEND_DOMAIN)
  SOCKETIO_DOMAIN: process.env.REACT_APP_SOCKETIO_DOMAIN || '0.0.0.0',
  BACKEND_DOMAIN: process.env.REACT_APP_BACKEND_DOMAIN || '0.0.0.0',
  BACKEND_PORT: process.env.REACT_APP_BACKEND_PORT || '8080',
};

export default config;
