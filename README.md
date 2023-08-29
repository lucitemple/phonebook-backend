# Phonebook

A simple phonebook app. The code in this repo is the backend of the project, which can be run locally or deployed by adding the frontend build to the folder.

## Getting started with the Phonebook

### Running the Phonebook locally

1. Clone this repo & `npm install`

2. Run ONE of the below commands in the command line:

- **For a development environment**

    `npm run dev`

    This will run the code with nodemon, which allows hot code reloading.

- **For a production environment** 

    `npm start`

3. Follow the instructions to clone the frontend repo and connect it to this backend. 

## Deploy the Phonebook

1. In the frontend repo, create a production build

    `npm run build`

2. From the root of the frontend repo, copy the build files to this backend repo. Presuming you have both the frontend and backend repositories located at the same level:

    `cp -r dist ../phonebook-backend`

3. Update the version number in package.json.

4. Commit the change and push to github