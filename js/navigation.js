// When screen is small, resize navigation
function navFunction() {
	var x = document.getElementById("smallnav");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else { 
		x.className = x.className.replace(" w3-show", "");
	}
}