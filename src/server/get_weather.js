const postDataWeather = async(content) => {
	fetch('http://localhost:8000/addWeath', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({place: content})
	})
	.then(res=>res.json())
	.then(function(res) {
		console.log(res);
		document.getElementById('temp').innerHTML = "Current weather \n"+res.temp+"\n C and \n"+res.description;
	})
	.catch((error)=>{
		console.log(error,"error in postDataWeather()");
	});
}


export {postDataWeather} 