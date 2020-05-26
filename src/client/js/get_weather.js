API_key = e190534a50d04c778eed7158e9bdadf5 //weatherbit.io
baseURL = 'http://api.weatherbit.io/v2.0/current?'

const getWeather = async (baseURL, place , API_key) => {
    const input = document.getElementById('input1').value;
    const res = await fetch(baseURL+'city='+input+'&key='+API_key)
	.then(res=>res.json())
    .then(function(response) {
        postData('add', {temp, description, date});
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
            date:data.date
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
        console.log(response)

	}catch(error){
		console.log("error",error);
	}
};

export{ getWeather}