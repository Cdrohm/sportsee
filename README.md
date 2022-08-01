# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

This repo contains all the source code to run the micro API for the sports analytics dashboard SportSee.

1. General information
To start this project, you are free to use Docker or not. In this documentation, we will see several methods to launch the project easily.

2. Project (without Docker)
2.1 Prerequisites
NodeJS (version 12.18)
Yarn
If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

2.2 Launching the project
Fork the repository
Clone it on your computer.
The yarn command will allow you to install the dependencies.
The yarn dev command will allow you to run the micro API.
3. Project (with Docker)
2.1 Prerequisites
Docker Desktop
2.2 Starting the project
The docker image build --no-cache -t micro-api . command will allow you to build your image.
The docker container run --name micro-api -p 3000:3000 -dt micro-api yarn command will allow you to create your Docker container and run your image on port 3000.
The docker container stop micro-api command will allow you to stop your micro-api.
The docker container rm micro-api command will allow you to delete your micro-api container.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn start` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
