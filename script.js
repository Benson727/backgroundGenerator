var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var RanDom = document.querySelector("button");


function setGradient() {
	var c1 = color1.value;
	var c2 = color2.value; 
	body.style.background = 
	"linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2
	+ ")";

css.textContent = body.style.background + ";";
	
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandom(){
	var c1 = getRandomColor();
	var c2 = getRandomColor();
	body.style.background = 
		"linear-gradient(to right, " 
		+ c1
		+ ", " 
		+ c2
		+ ")";
	color1.setAttribute("value",c1);
	color2.setAttribute("value",c2);

	css.textContent = body.style.background + ";";	
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

RanDom.addEventListener("click",setRandom);
