var pic = document.getElementById("vimage");
var clr = document.getElementById("clear");
var mv = document.getElementById("move");

var first = true;
var prevX, prevY = 0;

var circle = function(x, y, r) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
};

var dots = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    circle(x, y, 10);
    first = false;
    prevX = x;
    prevY = y;
};

var requestID;

var grow = function() {
    window.cancelAnimationFrame(requestID);
    var radius = 50;
    var xcor = 250;
    var ycor = 250;
    var increment = 1;
 
    var draw = function() {
	if (pic.lastChild)
	    pic.removeChild(pic.lastChild);
	circle(xcor, ycor, radius);
	radius += increment;
	if (xcor + radius == 500 || radius == 0)
	    increment *= -1;
    requestID = window.requestAnimationFrame(draw);
    };
    
    draw();
};

var clear = function() {
    window.cancelAnimationFrame(requestID);
    pic.removeChild(pic.lastChild);
};

//pic.addEventListener("click", grow);
pic.addEventListener("click", dots);
clr.addEventListener("click", clear);

