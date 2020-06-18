import { getWeather } from "./get_weather";
import { getDest } from "./post_destination";
import { getImage } from "./post_image.js";


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

	// TODO: send POST request to the backend url and pass the relevant data
	// 		 and also takes a response with data related to images and weather

	await getImage(baseURL_pic, content, app_key_pic);
	await getDest(baseURL_geo, content, app_id); 
	await getWeather(baseURL_weath, content, app_key_weather);
	
};

export {performAction}