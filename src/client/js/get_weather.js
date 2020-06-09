
const getWeather = async (baseURL_weath, place, API_key) => {
    const res = await fetch(baseURL_weath+'city='+place+'&key='+API_key)
	.then(res=>res.json())
    .then(function(res) {
        console.log(res); // RETURNS DATA HERE
        const data = {temp: res.data["0"].app_temp, description: res.data["0"].weather.description};
        console.log(data)
        postData('/add', data); // TRY TO PASS res.data[0].temp TO /add route.
    })
    .then(async function() {
        await updateWeather();
    })
}
const postData = async(url = '', data) => {
    console.log(data);
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			temp: data.temp,
            description: data.description,
            date: data.date
		}),

	});
	try{
		return response.json();
	}catch(error) {
		console.log("error", error);
	}
	
};

const updateWeather = async() => {
	const request = await fetch('/all')
	try{
        const response = await request.json()
        document.getElementById('temp').innerHTML = "Current Weather: \n"+ response.weatherData.temp+"C";
        document.getElementById('description').innerHTML = response.weatherData.description;
        

	}catch(error){
		console.log("error",error);
	}
};

export{ getWeather}