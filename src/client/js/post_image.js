
const getImage = async (baseURL_pic, place, key) => {
    const res = await fetch(baseURL_pic+'?key='+key+'&q'+place+'&image_type=photo')
    .then(res=>res.json())
    .then(function(res) {
        console.log(res);
        const data = {image: res.hits[0]};
        postData('/add', data);
    })
    .then(async function() {
        await updatePic();
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
			img: data.image
		}),

	});
	try{
		return response.json();
	}catch(error) {
		console.log("error", error);
	}
	
};

const updatePic = async() => {
	const request = await fetch('/all')
	try{
        const response = await request.json()
        document.getElementById('image').innerHTML = response.picData.image;

	}catch(error){
		console.log("error",error);
	}
};

export{ getImage }