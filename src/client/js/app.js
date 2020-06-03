import { getWeather } from "./get_weather";
import { getDest } from "./post_destination";
//geonames API 
const userName = 'kyraha'; 
const baseURL_geo = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
//weatherbit.io API
const baseURL_weath = 'http://api.weatherbit.io/v2.0/current?';
const API_key = 'e190534a50d04c778eed7158e9bdadf5';

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
	await getDest(baseURL_geo, place, userName); 
	await getWeather(baseURL_weath, place, API_key, content);
	
};

export {performAction}