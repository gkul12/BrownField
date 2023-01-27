1. After downloading the `.zip` file, extract it at any location
2. Navigate inside this project folder, open cmd there, and type these two commands:
    - `npm install`
    - `npm start`
3. The first command is for installing the node_modules folder as it contains important packages (this node_modules folder is going to be huge in size, so it is recommended to run this command when on wifi)
4. The second command will run the application
5. Currently there are 2 files in the `src/components` folder: `Login.jsx` and `Signup.jsx`. The code inside these files will run on "localhost:3000/login" and "localhost:3000/signup" respectively. This has been defined in the `index.js` file itself.
6. Currently the login and signup pages are only accepting the values from the user and on clicking the submit button, an alert is being displayed showing what values the user has entered. These values will be passed to the backend through API in the future when we create them.
7. Lastly, there is no styling added anywhere. I am planning to use material-ui for our project.
