const postDataDest = async(content) => {
	fetch('/addDest', {
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
		document.getElementById('place').innerHTML = "<b>My trip to \n"+res.dest.place+"</b>";
	})
	.catch((error)=>{
		console.log(error,"error in postDataDest()")
	});
}

export {postDataDest}

