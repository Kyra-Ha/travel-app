import { getWeather } from "./get_weather";
import { getDest } from "./post_destination";
import { getImage } from "./post_image.js";


//geonames API 
const userName = process.env.userName; 
const baseURL_geo = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
//weatherbit.io API
const baseURL_weath = 'https://api.weatherbit.io/v2.0/current?';
const API_key_weather = process.env.API_key_weather;
//pixabay API
const API_key_pic = process.env.API_key_pic; 
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
	document.getElementById('countdown').innerHTML = "<b>"+Math.ceil(((departure-d.getTime())/(1000 * 60 * 60 * 24)))+"</b>"+"<b> \n Day(s) To Go!</b>";
	document.getElementById('trip_length').innerHTML = "Length of Trip: \n"+Math.ceil(((endDate-departure)/(1000 * 60 * 60 * 24)))+"\n days";
	//post API data
	const content = document.getElementById('zip').value;
	await getImage(baseURL_pic, content, API_key_pic);
	await getDest(baseURL_geo, content, userName); 
	await getWeather(baseURL_weath, content, API_key_weather);
	
};

export {performAction}