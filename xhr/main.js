const xhr = new XMLHttpRequest();

//console.log(xhr.readyState);//current state of the request
// when the readyState changes ,this functio will be called.
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			//console.log(xhr.responseText);
			document.getElementById('resTxt').textContent = xhr.responseText;
		}

		if (xhr.status == 404) {
			console.log('File or resource not found');
		}
	}
};

xhr.open('GET', 'dom.txt', true); // true ->async call
//if we give false -> sync call(one line of code will be executed)
//console.log("hi");//wait until the open req is completed.
xhr.send();
