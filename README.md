# Basic form implementation - Hero Digital Assessment

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all NPM package dependencies required for the app to run.

### `npm start`

Runs the app in the development mode and also starts a local Json server instance.\
Open [http://localhost:3000](http://localhost:3000) to view the app.
Open [http://localhost:5000/subscriptions](http://localhost:5000/subscriptions) to fetch stored data on mock server.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Approach and used tools

- **Mock server:** used `json-server` as a quick way to setup a fake REST API / Mock service to store the form data and validate the results by fetching the provided data route.

- **Form validation:** implemented `react-hook-form` library to handle field validation and state control, it reduces the unnecesary re-renders and provides additional features to improve performance and code re-usability.

- **Scripts:** used `concurrently` package to be able to run the main app and the mock server on the same npm start execution.

## Pending Items

- Match the select dropdown with the provided style from the comps.
- Improve accessibility features to allow screen readers to announce all dynamic changes properly with clear messages.