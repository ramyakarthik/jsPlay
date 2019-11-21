function httpGet(url, callback) {
	const request = new XMLHttpRequest();

	request.open('get', url, true);
	request.onload = function() {
		callback(request);
	};
	request.send();
}

httpGet('details.txt', function(request) {
	if (request.status === 200) {
		console.log(request.responseText);
	}
});


