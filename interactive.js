var pic = document.getElementById("vimage");
var clr = document.getElementById("clear");
var mv = document.getElementById("move");

var first = true;
var prevX, prevY = 0;

var requestID;

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
    circle(x, y, 20);
    first = false;
    prevX = x;
    prevY = y;
};

var offsetX = 14;
var offsetY = 84;

var change_circle = function() {
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;
    console.log('this: ');
    console.log(this);
    console.log('event.target: ');
    console.log(event.target);

    this.setAttribute( "cx", x );
    this.setAttribute( "cy", y );
    
    if (this.getAttribute("fill") == "red"){
	this.setAttribute( "fill", "yellow" );
    }
    else if (this.getAttribute("fill") == "yellow") {
	pic.removeChild(this);
	var newc = new_circle();
	
	x = Math.random() * 1000;
	y = Math.random() * 500;

	newC.setAttribute( "cx", x );
	newC.setAttribute( "cy", y );
	sv.appendChild( newC );
    }
    event.stopPropagation();
};

var circle = function() {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;

    c.setAttribute( "cx", x );
    c.setAttribute( "cy", y );
    c.setAttribute( "r", 50 );
    c.setAttribute( "fill", "green" );
    c.setAttribute( "stroke", "black" );
    c.setAttribute( "dy", 1 );
    c.setAttribute( "dx", 5 );
    c.setAttribute( "ddy", 10.0 );
    c.addEventListener('click', change_circle );
    return c;
};

var add_circle = function() {
    var c = circle();
    
    pic.appendChild( c );
};
pic.addEventListener( 'click', circle);


var clearB = document.getElementById('clear');
clearB.addEventListener( 'click', clear );

var move = function() {
    
    var mv = function() {
	var kids = pic.children;
	var dy, dx, ddy, x, y;
	for (var i = 0; i < kids.length; i++){
	    dy = parseInt( kids[i].getAttribute('dy') );
	    ddy = parseInt( kids[i].getAttribute('ddy') );
	    dx = parseInt( kids[i].getAttribute('dx') );
	    x = parseInt( kids[i].getAttribute('cx') );
	    y = parseInt( kids[i].getAttribute('cy') );

	    if (x <= 0 || x >= 1000)
		dx *= -1;
	    if (y >= 450)
		dy*=-1;
		    
	    dy += ddy;
	    
	    if (y <= 0) {
		dy *= -1;
	    }
	    
	    
	    x += dx;
	    y += dy;
	    if (y >= 450)
		y += dy;
	    
	    console.log(x, y, dx, dy, ddy);
	    kids[i].setAttribute( "cy", y );
	    kids[i].setAttribute( "cx", x );
	    kids[i].setAttribute( "dy", dy );
	    kids[i].setAttribute( "dx", dx );
	    kids[i].setAttribute( "ddy", ddy );
	    
	}
    };
    window.setInterval( do_it, 32 );

};

var moveB = document.getElementById('move');
bud.addEventListener( 'click', move );

var move = function() {
    
}

var change_color = function() {
}

var clear = function() {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    first = true;
    
    //window.cancelAnimationFrame(requestID);
    //pic.removeChild(pic.lastChild);
};

//pic.addEventListener("click", grow);
pic.addEventListener("click", dots);
clr.addEventListener("click", clear);
mv.addEventListener("click", move);
pic.addEventListener( 'click', circle);

