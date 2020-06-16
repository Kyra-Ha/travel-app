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

/* Function called by event listener */
async function performAction(e){
	e.preventDefault();
	console.log("clicked");
	//get and post dates 
	const start_date = document.getElementById('start_date').value;
	const end_date = document.getElementById('end_date').value;
	const departure = new Date(start_date).getTime();
	const endDate = new Date(end_date).getTime();
	console.log(departure);
	document.getElementById('countdown').innerHTML = Math.ceil(((departure-d.getTime())/(1000 * 60 * 60 * 24)))+"\n Day(s) To Go!";
	document.getElementById('trip_length').innerHTML = "Length of Trip: \n"+Math.ceil(((endDate-departure)/(1000 * 60 * 60 * 24)))+"\n days";
	//post API data
	const content = document.getElementById('zip').value;
	await getImage(baseURL_pic, content, API_key_pic);
	await getDest(baseURL_geo, content, userName); 
	await getWeather(baseURL_weath, content, API_key_weather);
	
};

export {performAction}