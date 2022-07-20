# Teamway Challenge
The basic project setup here is composed of the following structure:

 - server 
 - frontend

On local environment, the server will run on port 3001 and frontend on port 3000

### Server

Basic Express server with a mock database, pre-sourced from a JSON template. 

`app.ts` is the entry point file, handling routes and importing of services and api endpoints for frontend
`common.ts` contains all of the type definitions for  the quiz database
`database.ts` contains the logic for initialising the default database, as well as CRUD functionality

### Project Setup

 - npm install
 - npm run debug


## Frontend

React app for handling all of the frontend logic, all of the app logic is contained in the `src` folder. 

`App.tsx` is the main app flow container, handling quiz state, current section and server requests.
`sections` contains all of the separate areas of the quiz

 - Landing Page
 - Test Flow
 - Results

Tests are setup for the 2 components with core logic.

`components` contains all generic components that might be reused
`common` contains all helper files for data structure, apis, and mock data for testing

### Project Setup

 - npm install
 - npm run start

