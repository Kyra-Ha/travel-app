// Setup empty JS object to act as endpoint for all routes
projectData = {};
const fetch=require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();
//geonames API 
const baseURL_geo = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const app_id= process.env.userName;
//weatherbit.io API
const baseURL_weath = 'https://api.weatherbit.io/v2.0/current?';
const app_key_weather=process.env.API_key_weather;
//pixabay API
const baseURL_pic = 'https://pixabay.com/api/';
const app_key_pic=process.env.API_key_pic;

console.log(`Your API keys are ${app_key_weather}, ${app_key_pic}, ${app_id}`);

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
// TODO: write a route that app.js can send data to
// 		 and make sure we query the weather api.
// 		 and then returns the weather and an image.
app.get('/add', (req, res)=>{
	const getWeather = async (baseURL_weath, place, API_key) => {
		const res = await fetch(baseURL_weath+'city='+place+'&key='+API_key);
		try {
			const data = await response.json();
			// console.log(data);
			return data;
		  } catch (error) {
			console.log('Error here: ', error);
		  }
		};
	const getImage = async (baseURL_pic, place, key) => {
		const res = await fetch(baseURL_pic+'?key='+key+'&q='+place+'&image_type=photo');
		try {
			const data = await response.json();
			return data;
			} catch (error) {
			console.log('Error here: ', error);
			}
		};
	const getDest = async (baseURL_geo, place, userName) => {
		const res = await fetch(baseURL_geo+place+'&maxRows=10&username='+userName);
		try {
			const data = await response.json();
			return data;
			} catch (error) {
			console.log('Error here: ', error);
			}
		};
})
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
	await getDest();
	await getImage();
	await getWeather();

	projectData = {placeEntry,weatherData,picData}
	res.send(projectData);
};


