/* Function to GET geo_names Web API Data*/

const getDest = async (baseURL_geo, place, userName) => {

    const res = await fetch(baseURL_geo+place+'&maxRows=10&username='+userName)
	.then(res=>res.json())
    .then(function(res) {
        const lat = res.postalCodes[0].lat;
        const long = res.postalCodes[0].lng;
        console.log(lat, long)
        const data = {place: res.postalCodes[0].placeName}
        postData('add', data);
    })
    .then(async function() {
        await updateDestination();
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
        document.getElementById('place').innerHTML = "<u> My trip to \n" + response.placeEntry.place+"</u>";
	}catch(error){
		console.log("error", error);
	}
};
export {getDest}

