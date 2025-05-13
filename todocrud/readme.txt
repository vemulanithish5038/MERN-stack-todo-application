
npm init -y
npm i express
npm i mongoose
npm i --save-dev nodemon            //node mone live server
npm run  devStart
npm install cors     use  const cors = require('cors');   
                            app.use(cors());

i need to actual express server,require express library 

1.express.json()
         -express.json() is important for handling JSON data 
        -If you don’t use express.json(), the req.body would be undefined  because ExpresS DOESNT know how to handle the incoming data
        -It parses incoming JSON requests and makes the data available in req.body for easy access within your route handlers.

        -If you send a POST request like this with a JSON body:
{
  "name": "Nithish",
  "age": 25
}

const jsonData = req.body;
console.log(jsonData.name);  
console.log(jsonData.age);   

2.express.static()

        -express.static() allows you to serve static files from a directory
                -files like HTML, CSS, JavaScript, and images for web applications
                - You don’t need to write separate route handlers for each file (HTML, CSS, JavaScript, images)
                -if you place an index.html file in a directory called public, Express will serve it when the user visits the root URL (/).

    /myapp
  /public
    - index.html
    - style.css
    - script.js

app.use('/static', express.static('public'));

Run the server
node script.js
http://localhost:3000/static/index.html(shows bro url)//same for all files

3.express.Router()

            -In Express.js, a route  that handles HTTP requests. A route consists of a path and an HTTP method (like GET, POST, PUT, DELETE)
            - A router acts as a mini-Express application
            -Instead of defining all your routes in the main app.js file, you can split them into different route modules.


const express = require('express');
const router = express.Router();

// Define a route
router.get('/about', (req, res) => {
  res.send('About Page');
});

// Another route
router.get('/contact', (req, res) => {
  res.send('Contact Page');
});

module.exports = router;




const express = require('express');
const app = express();
const myRouter = require('./myRouter');  // Import the router

// Mount the router on a specific path
app.use('/myApp', myRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

4.express.urlencoded()


//(crud)operations
  c-create-create new server
  r-read-read resource from server
  u-update- update the resource
  d-delete-delete the resource


Method	  Operation	      Example Use Case
GET   	  Read	           Fetch user details
POST  	  Create	         Add a new user
PUT	      Update	         Update user profile
DELETE	  Remove	         Delete a user

POST /api/v1/users: Add a new user.
GET /api/v1/users: Fetch all users.
PUT /api/v1/users/:id: Update a specific user.
DELETE /api/v1/users/:id: Delete a specific user.


Patch
=> When updating only certain fields of a resource.
=> If you want to replace the whole resource, use PUT instead.


When to Use HEAD?
 =>Checking if a resource exists before making a GET request.
 =>Getting metadata (headers) like content-type, last-modified, etc.
 =>Useful for caching and performance optimizations in APIs.

=> If you need actual data, use GET instead.