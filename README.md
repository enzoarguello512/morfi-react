<p align="center">
  <a href="https://morfi-react.vercel.app">
    <img src="https://i.imgur.com/cDNjn1M.png" alt="The Morfi logo" height="100">
  </a>
  <h1 align="center">morfi-react</h1>
  <p align="center">🚀 A front-end application built with React, Redux & RTK Query, Bootstrap, Socket.io, Typescript, and JSON Web Tokens. Adapted from the original morfi project. 🍔<p>
  <p align="center">
    <img alt="Version" src="https://img.shields.io/badge/version-0.1.5-blue.svg?cacheSeconds=2592000" />
    <a href="https://github.com/enzoarguello512/api-rest-ecommerce#readme" target="_blank">
      <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
    </a>
    <a href="https://github.com/enzoarguello512/api-rest-ecommerce/graphs/commit-activity" target="_blank">
      <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
    </a>
    <a href="https://github.com/enzoarguello512/api-rest-ecommerce/blob/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/github/license/enzoarguello512/morfi-react" />
    </a>
    <a href="https://twitter.com/enzoarguello512" target="_blank">
      <img alt="Twitter: enzoarguello512" src="https://img.shields.io/twitter/follow/enzoarguello512.svg?style=social" />
    </a>
  </p>
</p>

Welcome 👋 to the [morfi](https://github.com/enzoarguello512/morfi) frontend app repository (a shortened version made with react), where the code for the store page, user registration, and customer communication can be found.

As a novelty, the [back-end section of the application](https://github.com/enzoarguello512/node-rest-jwt) has also been added! 🖥

## ✨ Active deployments

> (Please bear in mind that the site will take a while to load since it's deployed on a free tier, but it will load, just give it some time 😉)

- [https://morfi-react.vercel.app](https://morfi-react.vercel.app) - Front-end deployment in vercel.
- [https://node-rest-jwt.onrender.com](https://node-rest-jwt.onrender.com) - Back-end deployment in render (cold start ❄️, so it will be the slower of the two).

<p align="center">
  <img src="https://user-images.githubusercontent.com/75096734/190830800-261c9be8-6355-462e-a74a-ffc474dc7233.png" alt="The Morfi SPA" height="300">
</p>

## 📦 Main features

- State and request handling using React & RTK Query
- Bootstrap and SASS custom styles
- Session management with JSON Web Tokens (aka "jwt") (authentication, session inactivity, auto-login, token rotation, etc)
- Query-based filtering of products
- A socket.io-based chat implementation

### ⚡ Future features

- Create an order that edits product stock

## 👨‍💻 Install

```sh
npm install
```

## 🔥 Usage

**This requires that you have already pre-configured the ".env.development" file. You can find the example in [.env.example.development](https://github.com/enzoarguello512/morfi-react/blob/159b9b61dfd1772f6ae5fb8f70f17104af22a03d/.env.example.development).**

For production mode, you will need the [".env.production"](https://github.com/enzoarguello512/node-rest-jwt/blob/develop/.env.example) file and also to start the server with the results of `npm run build`.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

The page will reload if you make edits. You will also see any lint errors in the console.

```sh
npm start
```

## 🧪 Run tests

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```sh
npm run test
```

## 📄 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/enzoarguello512/api-rest-ecommerce/issues). You can also take a look at the [contributing guide](https://github.com/enzoarguello512/api-rest-ecommerce/blob/master/CONTRIBUTING.md).

## 📝 License

Copyright © 2022 [enzoarguello512](https://github.com/enzoarguello512).<br />
This project is [MIT](https://github.com/enzoarguello512/api-rest-ecommerce/blob/master/LICENSE) licensed.
