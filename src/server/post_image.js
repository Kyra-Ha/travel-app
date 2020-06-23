const postDataImg = async(content) => {
	fetch('/addImage', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({place: content})
	})
	.then(res=> res.json())
	.then(function(res){
        console.log(res)
        document.getElementById('image').setAttribute('src', res.image);
	})
}

export{postDataImg}