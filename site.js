function about() {
	var x = document.getElementById("about");
	var y = document.getElementById("contact");
	if (x.style.display==="none") {
		x.style.display="block";
		y.style.display="none";
	}
}
function contact() {
	var x = document.getElementById("contact");
	var y = document.getElementById("about");
	if (x.style.display==="none") {
		x.style.display="block";
		y.style.display="none";
	} else {
		x.style.display="none";
	}
}
function activea() {
		document.getElementById("aboutt-me").style.background="#5757d76b";
		if (document.getElementById("contactt-me").style.background!="#d0d0f43b") {
			document.getElementById("contactt-me").style.background="#d0d0f43b";
		}
}
function activec() {
		document.getElementById("contactt-me").style.background="#5757d76b";
		if (document.getElementById("aboutt-me").style.background!="#d0d0f43b") {
			document.getElementById("aboutt-me").style.background="#d0d0f43b";
		}
}