
//get date
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
let newDate = months[d.getMonth()]+','+ d.getDate()+','+ d.getFullYear();

const getWeather = async (baseURL_weath, place, API_key, newDate) => {
    const input = document.getElementById('input1').value;
    const res = await fetch(baseURL_weath+'city='+input+'&key=', API_key)
	.then(res=>res.json())
    .then(function(response) {
        postData('add', {temp, description, place, newDate});
		console.log(temp, description);
    })
    .then(function() {
        updateWeather();
    })

}
const postData = async (url = '', data = {}) => {
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			temp: data.temp,
            description: data.description,
            date:data.date,
            place:data.place
		}),

	});
	try{
		return response.json();
	}catch(error) {
		console.log("error", error);
	}
	
};

const updateWeather = async() => {
	const request = await fetch('all')
	try{
        const response = await request.json()
        document.getElementById('temp').innerHTML = response.app_temp;
        document.getElementById('description').innerHTML = response.weather.description;
        document.getElementById('date').innerHTML = response.date;
        document.getElementById('place').innerHTML = response.city_name;
        console.log(response)

	}catch(error){
		console.log("error",error);
	}
};

export{ getWeather}