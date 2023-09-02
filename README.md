# Phonebook (Backend Project)

The backend for a simple phonebook app. This project was completed for [Part 3 of FullStackOpen](https://fullstackopen.com/en/part3). 

Goals:
-  implement a simple REST API in Node.js using the Express library
- store the data in a MongoDB database
- connect the frontend (from Part 2) to the backend
- implement linting
- implement scripts (such as to deploy)
- data validation
- error handling
- use of middleware
- deploy the app online
- handle CORS

Key technologies used:
- Node.js
- Express
- MongoDB & Mongoose

## Getting started with the Phonebook

### Running the Phonebook locally

1. Clone this repo & `npm install`

2. Run ONE of the below commands in the command line:

- **For a development environment**

    `npm run dev`

    This will run the code with nodemon, which allows hot code reloading.

- **For a production environment** 

    `npm start`


## Deploy the Phonebook

1. Update the version number in package.json.

2. Copy the latest build of the frontend code into the `dist/` directory. 

    Presuming both the frontend and backend local repos are located in the same directory on your local machine, you can run the deloy script from the root of this repo to achieve this:

    `npm run deploy:full`

    This command will create a build of the frontend, copy it to the `dist/` directory of this backend repo, commit it and push it to github. 

    When this is done on the `main` branch, it will automatically be deployed to cyclic at the address [https://easy-pear-perch-tam.cyclic.app](https://easy-pear-perch-tam.cyclic.app)

