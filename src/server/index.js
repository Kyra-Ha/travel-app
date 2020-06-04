// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));
const port = 8000;

// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening(){
	console.log('server running');
	console.log(`running on localhost: ${port}`);};

// Initialize all route with a callback function
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Callback function to complete GET '/all'
app.get('/all', sendData)
function sendData(req, res){
	res.send(projectData);
};

// Post Route

app.post('/add', addData);

function addData(req, res){
	console.log(req.body);
	const placeEntry = {
		place : req.body.place,
	};
	const weatherData = {
		temp: req.body.temp,
		description: req.body.description, 
		date: req.body.date
	};
	const picData = {
		image: req.body.image
	};
	projectData = {placeEntry,weatherData,picData}
	res.send(projectData);
};

