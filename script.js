var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("grad");
var css = document.getElementsByTagName("h3")[0];
var button = document.querySelector("button");

body.style.background = "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
css.textContent = body.style.background + ";";	

function backgroundgenerator(){
	body.style.background = "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
	css.textContent = body.style.background + ";";
};

color1.addEventListener("input", backgroundgenerator);
color2.addEventListener("input", backgroundgenerator);

button.addEventListener("click", function(){
	color1.value = "#"+((1<<24)*Math.random()|0).toString(16);
	color2.value = "#"+((1<<24)*Math.random()|0).toString(16);
	backgroundgenerator();
});