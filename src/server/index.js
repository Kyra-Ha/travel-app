
const fetch=require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();
//geonames API 
const baseURL_geo = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const app_id= process.env.app_id;
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


//Post Image

const getImage = async (baseURL_pic, place) => {
	const response = await fetch(baseURL_pic+'?key='+app_key_pic+'&q='+place+'&image_type=photo')
	.then(res=>res.json())
	.then(function(res) {
		const data = res.hits[1].webformatURL;
		console.log(data);
		return data;
	})
	.catch(err => err);
	return response;
};
app.post('http://localhost:8000/addImage', async (req, res) => {
	const placeName = req.body.place;
	const img = await getImage(baseURL_pic, placeName);
	res.send({
		image: img
	});
	console.log(placeName);
})

//Post Destination
const getDest = async (baseURL_geo, place) => {
	const response = await fetch(baseURL_geo+place+'&maxRows=10&username='+app_id)
	.then(res=>res.json())
	.then(function(res) {
		const lat = res.postalCodes[0].lat;
		const long = res.postalCodes[0].lng;
		console.log(lat, long);
		const data = {place: res.postalCodes[0].placeName};
		return data
	})
	.catch(err=>err);
	return response;
}

app.post('http://localhost:8000/addDest', async(req,res)=> {
	const destination = req.body.place;
	const dest = await getDest(baseURL_geo, destination);
	res.send({
		dest: dest
	});
	console.log(destination)
})

//Post Weather

const getWeather = async (baseURL_weath, place) => {
	const response = await fetch(baseURL_weath+'city='+place+'&key='+app_key_weather)
	.then(res=>res.json())
	.then(function(res) {
		const data = {temp: res.data["0"].app_temp, description: res.data["0"].weather.description};
		console.log(data);
		return data;
	})
	.catch(err=>err);
	return response;
};

app.post('http://localhost:8000/addWeath', async(req, res)=>{
	const weather = req.body.place;
	const weatherData = await getWeather(baseURL_weath, weather);
	console.log(weatherData);
	res.send({
		temp: weatherData.temp,
		description: weatherData.description
	});
	
})

module.exports = app;