function parse () {
	request = new XMLHttpRequest();
	
	//if(request.readyState == 4 && request.status == 200) {
		content = JSON.parse(request.responseText);
		console.log("request.readyState");
		document.getElementById("messages").innerHTML = content;		
	//}
	request.open("GET", "data.json", true);	
	request.send();

}
