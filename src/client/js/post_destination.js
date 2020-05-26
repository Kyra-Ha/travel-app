userName = 'kyraha' //geonames
baseURL = 'api.geonames.org/postalCodeSearchJSON?placename='

/* Function to GET Web API Data*/

const getDest = async (baseURL, place, userName) => {
    const input = document.getElementById('input1').value;
    const res = await fetch(baseURL+input+'&maxRows=10&username='+userName)
	.then(res=>res.json())
    .then(function(response) {
        postData('add', place);
			console.log(place);
    })
    .then(function() {
        updateDestination();
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
			place: data.place
		}),

	});
	try{
		return response.json();
	}catch(error) {
		console.log("error", error);
	}
	
};
/* Function to GET Project Data */
const retrieveData = async (url='') => {
	const request = await fetch('http://localhost:8000/all');
	try{
		const allData = await request.json();
	}
	catch(error){
		console.log("error", error);
	}
};
//Update UI
const updateDestination = async() => {
	const request = await fetch('all')
	try{
		const response = await request.json()
        const place = response.postalCodes[0].placeName;
        console.log(place)

	}catch(error){
		console.log("error",error);
	}
};
export {getDest}

