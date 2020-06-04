import { getWeather } from "./get_weather";
import { getDest } from "./post_destination";
import { getImage } from "./post_image.js";

//geonames API 
const userName = 'kyraha'; 
const baseURL_geo = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
//weatherbit.io API
const baseURL_weath = 'https://api.weatherbit.io/v2.0/current?';
const API_key_weather = 'e190534a50d04c778eed7158e9bdadf5';
//pixabay API
const API_key_pic = '16696056-b4d3360e4112125a5da16f0a5'; 
const baseURL_pic = 'https://pixabay.com/api/';

// Create a new date instance dynamically with JS
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
let newDate = months[d.getMonth()]+','+ d.getDate()+','+ d.getFullYear();


/* Function called by event listener */
async function performAction(e){
	e.preventDefault();
	console.log("clicked");
	const content = document.getElementById('zip').value;
	await getDest(baseURL_geo, content, userName); 
	await getWeather(baseURL_weath, content, API_key_weather);
	await getImage(baseURL_pic, content, API_key_pic);
};

export {performAction}