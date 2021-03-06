# SincerelyFrom.com

## About
SincerelyFrom.com is a travel blog for traveler Natalie Reque. The front-end of the code is written using React.js. Using Docker a container is created with Node.js and Nginx. That container has been uploaded to AWS Elastic Beanstalk to aid in deploying the application.

The application was developed on Ubuntu 18.04.

## Deployment Instructions

Open the project directory in a terminal, and run:

```npm run build```

Then to build docker image:

```sudo docker build -t sincerelyfrom .```

Run the container on port 3000 to see if it is working:

```sudo docker run -p 3000:80 sincerelyfrom```

Log into docker:

```docker login```

Tag the local image (use local image ID) to the remote repo & tag:

```docker tag {########} sbossard/sincerelyfrom:latest```

Push to remote repo:

```docker push sbossard/sincerelyfrom:latest```

Log into AWS Console. Go to Elastic Beanstalk and choose the application. In the Actions dropdown choose "Rebuild Environment"

## Local Front End Editing Instructions
In the project directory, you can run:

```npm start```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```npm test```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```npm run build```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```npm run eject```

Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

