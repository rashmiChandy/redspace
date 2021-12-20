# StarwarsBackend
Backend APP accepts a person id to make the request and consolidates the data about the person into the response
Created using NodeJS.

## Libraries used
[1] ExpressJS
[2] Request

## Deployed Application URL

[1] Frontend: Deployed using AWS Amplify
    [a] Landing Page: https://master.d1pjf0xo8r678k.amplifyapp.com/  
    [b] Star Wars Page: https://master.d1pjf0xo8r678k.amplifyapp.com/people
[2] Backend: Deployed using Google Cloud Platform - Google Cloud Run
    [a] Base Url: https://server-5rtj3t4uua-uc.a.run.app
    [b] Get API: https://server-5rtj3t4uua-uc.a.run.app/api/starwars/people/1

## Sample BACKEND URL : https://server-5rtj3t4uua-uc.a.run.app/api/starwars/people/1

## Github URL
Repository URL: https://github.com/rashmiChandy/redspace

## To run locally

[1] Run `npm install` to install the dependencies required to run the project

[2] Start the backend server by using `npm start` or `node index.js` command in the root directory which has the package.json file . If the backend server is running locally change API url as apiUrl:'http://localhost:8080/api' in environent files of frontend application else use deployed url.