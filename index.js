function init(){
	document.getElementById("retrieveName").onclick = loadName;
}

function loadName(){
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
			appName = responseObject.appName;
			render();
		}
	};

	xhttp.open("GET", "application-name", true);
	xhttp.send();
}

function render(){
	let content = "";
    content += `
        <div>
            <p> Questo sito si chiama: ${appName} !!</p>
        </div>
    `
	document.getElementById("NameDiv").innerHTML = content;
}