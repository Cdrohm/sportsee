# Presentation
SportSee is a startup dedicated to sports coaching. In full growth, the company will today launch a new version of the user profile page. The goal is to redo the profile page with React.

[![forthebadge](./made-with-create-react-app.svg)](https://create-react-app.dev/)
[![forthebadge](./uses-recharts.svg)](https://recharts.org/en-US/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## BACK-END

Download this respository:

`https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard`

## 1. Project (**without Docker**)

### 1.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 1.2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.


## 2. Project (**with Docker**)

### 2.1 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### 2.2 Starting the project

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.


## FRONT-END

Download this respository:

`https://github.com/Cdrohm/sportsee`

### 1. Install Yarn

`yarn install`

### 2. Launch the application

`yarn start`

### Use the application

You can change USER'S PROFILE by clicking on the logo. This is for demonstration purpose ONLY.

### URL/PORT

The default URL used by the application is <http://localhost:3001>.
You can change the port modifying the *.env* file at root, simply by changing the port number referenced at ```PORT``` variable. *If the application is already launched, you shall stop it and re-launch it*.

If you use a different API URL(back-end part) than the default one, you can set the right URL in the *.env* file at root by changing the value of the ```REACT_APP_API_URL``` variable. *If the application is already launched, you shall stop it and re-launch it*.

### USE WITHOUT BACKEND

You can test the application without the back-end part, using a mocked file placed in the folder *"./src/assets/mockedData/data.js"* containing two default users. Access the *.env* file at root, and change the ```REACT_APP_MOCKED_DATA``` variable to *true*. *If the application is already launched, you shall stop it and re-launch it*.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn start` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
