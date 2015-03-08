function parse () {
		request = new XMLHttpRequest();
		request.open("get", "data.json", true);
		request.onreadystatechange = myCallbackFunction;
		request.send();
		function myCallbackFunction() {
			console.log("In my callback function " + request.readyState);
			if (request.readyState == 4 && request.status == 200) {
				data = JSON.parse(request.responseText);
				
				document.getElementById("messages").innerHTML = data[0].content;
			}
		}
}
