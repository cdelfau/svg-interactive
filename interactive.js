var pic = document.getElementById('vimage');
var clr = document.getElementById('clear');
var mv = document.getElementById('move');
var wid = svg.getAttribute('width');
var hei = svg.getAttribute('height');
var requestID;
var run = false;

var circle = function(x, y) {
    var state = 0;
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x);
    c.setAttribute('cy', y);
    c.setAttribute('r', 13);
    c.setAttribute('fill', 'blue');
    c.setAttribute('stroke', 'black');
    c.setAttribute('dx', 1);
    c.setAttribute('dy', 1);
    c.addEventListener('click', change_color);
    pic.appendChild(c);
};

var change_color = function(e) {
    if (e.target.getAttribute('fill') == 'blue') {
	e.target.setAttribute('fill', 'green');
    }
    else {
	pic.removeChild(e.target);
	var x = Math.floor(Math.random() * (486 - 15) + 15);
	var y = Math.floor(Math.random() * (486 - 15) + 15);
	circle(x, y);
    };
    e.stopPropagation();
};

var create = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    circle(x, y, 1, 1);
};

var clear = function() {
    window.cancelAnimationFrame(requestID);
    while (pic.lastChild)
	pic.removeChild(pic.lastChild);
};

var move = function() {
    window.cancelAnimationFrame(requestID);
    var circles = document.getElementsByTagName('circle');
    var draw = function() {
	for (i = 0; i < circles.length; i++) {
	    var c = circles[i];
	    var x = parseInt(c.getAttribute('cx'));
	    var y = parseInt(c.getAttribute('cy'));
	    var r = parseInt(c.getAttribute('r'));
	    var dx = parseInt(c.getAttribute('dx'));
	    var dy = parseInt(c.getAttribute('dy'));
	    c.setAttribute('cx', x + dx);
	    c.setAttribute('cy', y + yinc);
	    if (x + r == 500)
		c.setAttribute('dx', -1);
	    if (x - r == 0)
		c.setAttribute('dx', 1);
	    if (y + r == 500)
		c.setAttribute('dy', -1);
	    if (y - r == 0)
		c.setAttribute('dy', 1);
	};
	requestID = window.requestAnimationFrame(draw);
    };
    draw();
};

var split = function(c){
    var rad = parseInt(c.getAttribute("r"));
    if(rad == 2){
	svg.removeChild(c);
    }else{
	var x = parseInt(c.getAttribute("cx"));
	var y = parseInt(c.getAttribute("cy"));
	var rx = parseInt(c.getAttribute("rx"));
	var ry = parseInt(c.getAttribute("ry"));
	svg.removeChild(c);
	svg.appendChild(circle(x, y, rad/2, rx, ry));
	svg.appendChild(circle(x, y, rad/2, -rx, -ry));
    }
}

pic.addEventListener('click', create);
clr.addEventListener('click', clear);
mv.addEventListener('click', move);
