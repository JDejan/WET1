//Übung 5 - WET

function mark(value) {
	val = parseInt(value);
	if(val < 25 && val > 0) {
		document.getElementById(val).setAttribute("style", "border-color:red;");
		document.getElementById(val).getElementsByTagName("P")[0].setAttribute("style", "color:red;");
	}
}

function draw() {
	var boxes = document.getElementById("boxes");
	var randomnumber;

	for(var i = 1; i <= 24; i++) {
		var randomnumber = (Math.floor(Math.random() * 24)) + 1;

		while(document.getElementById(randomnumber)) {
			randomnumber = Math.floor(Math.random() * 24) + 1;
		}

		var eDiv = document.createElement("DIV");
		var label = document.createElement("P");
		var text = document.createTextNode(randomnumber);

		eDiv.className = "box";
		eDiv.id = randomnumber;
		label.appendChild(text);
		eDiv.appendChild(label);
		eDiv.setAttribute("onclick", "bilder(" + randomnumber + ")");
		boxes.appendChild(eDiv);
	}
}

function bilder(id) {
	var div = document.getElementById(id);
	div.setAttribute("style", "background-image: url(\"images/" + id + ".jpg\");");
	div.removeChild(div.firstChild);
}