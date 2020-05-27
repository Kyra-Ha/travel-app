import { getWeather } from "./get_weather";
import { getDestination} from "./post_destination";

// Create a new date instance dynamically with JS
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
let newDate = months[d.getMonth()]+','+ d.getDate()+','+ d.getFullYear();


/* Function called by event listener */
async function performAction(e){
	console.log("clicked");
	const content = document.getElementById('input1').value;
	return [getDest(), getWeather()];
	
};

export {performAction}