import { postDataWeather } from "../../server/get_weather";
import { postDataDest } from "../../server/post_destination";
import { postDataImg } from "../../server/post_image.js";

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
	await postDataImg(content);
	await postDataDest(content);
	await postDataWeather(content);
};

export {performAction}