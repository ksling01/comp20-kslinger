function parse () {
		request = new XMLHttpRequest();
		request.open("get", "data.json", true);
		request.onreadystatechange = myCallbackFunction;
		request.send();
		function myCallbackFunction() {
			console.log("In my callback function " + request.readyState);
			if (request.readyState == 4 && request.status == 200) {
				data = JSON.parse(request.responseText);
				for(i=0;i<2;i++) {
				phrase= data[0].content +" "+ data[0].username+'div'+data[1].content
					document.getElementById("messages").innerHTML = phrase;
					
				}
			}
		}
}
