function init(){
	document.getElementById("retrieveName").onclick = loadName;
	document.getElementById("breakPod").onclick = breakPod;
	document.getElementById("generateLoad").onclick = generateLoad;
	document.getElementById("retrievePod").onclick = loadPod;
}

function loadName(){
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
			developerName = responseObject.developerName;
			renderName();
		}
	};

	xhttp.open("GET", "developer-name", true);
	xhttp.send();
}

function loadPod(){
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
			podName = responseObject.podName;
			renderPod();
		}
	};

	xhttp.open("GET", "pod-name", true);
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
	setTimeout(generateLoad, 5000)
}

function renderName(){
	let content = "";
    content += `
        <div>
            <p> Che grande Sviluppatore che sei  ${developerName} !!</p>
        </div>
    `
	document.getElementById("NameDiv").innerHTML = content;
}

function renderPod(){
	let content = "";
    content += `
        <div>
            <p> Ti ha risposto il Pod  ${podName} !!</p>
        </div>
    `
	document.getElementById("PodDiv").innerHTML = content;
}