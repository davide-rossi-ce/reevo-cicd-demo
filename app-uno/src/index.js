function init(){
	document.getElementById("retrieveName").onclick = loadName;
	document.getElementById("breakPod").onclick = breakPod;
	document.getElementById("generateLoad").onclick = generateLoad;
}

function loadName(){
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
			developerName = responseObject.developerName;
			render();
		}
	};

	xhttp.open("GET", "developer-name", true);
	xhttp.send();
}

function breakPod(){
	let xhttp = new XMLHttpRequest();

	xhttp.open("GET", "break", true);
	xhttp.send();
}

function generateLoad(){
	let xhttp = new XMLHttpRequest();

	xhttp.open("GET", "load", true);
	xhttp.send();
}

function render(){
	let content = "";
    content += `
        <div>
            <p> Che grande Sviluppatore che sei  ${developerName} !!</p>
        </div>
    `
	document.getElementById("NameDiv").innerHTML = content;
}