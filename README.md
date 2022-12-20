# Dockerising a react + node webapp

This repo has 2 things

- a react client app
- an api that it consumes

The expected network flow

```
http://app.com      ----------> loads react app
http://app.com/api  ----------> loads api
```

this should be same for development and in production.
This repo is an example project that implements this.

## Running / deployment

```
$ ./build_docker_images.sh
$ docker-compose up
```

Then visit http://localhost:3000/

Open the network tab in your browser.

## Starting the project for development

### `server`

```
$ nvm use
$ cd server
$ npm i
$ npm start
```

### `client`

```
$ nvm use
$ cd client
$ npm i
$ npm run dev
```

The `vite.config.js` file has a config setting that maps the client
dev server http://localhost:5173/api to the backend server
http://localhost:5005

**This is however only for development**.

## Dockerising

There will be 2 images

- `docker-react` : this is an `nginx` image that holds the built
react project and has a `location` entry for `/api` that
proxies to the docker service `node-be`
- `docker-node`: this is a `node` image that holds the backend server

## References

- https://jsramblings.com/dockerizing-a-react-app/
- https://milanwittpohl.com/projects/tutorials/Full-Stack-Web-App/dockerizing-our-front-and-backend
