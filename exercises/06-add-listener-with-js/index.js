window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
var btn = document.getElementById("theGreen");
btn.addEventListener(
	"click",
	() => {
		alert("wuju");
	},
	false
);
