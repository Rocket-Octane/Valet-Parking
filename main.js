//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
ch = 125;
cw = 75;

bg_img = "parkingLot.jpg";
c_img = "car2.png";

//Set initial position for a car image.
cx = 5;
cy = 210;


function add() {
	bg_imgTag = new Image();
	bg_imgTag.onload = uploadBackground;
	bg_imgTag.src = bg_img;

	c_imgTag = new Image();
	c_imgTag.onload = uploadgreencar;
	c_imgTag.src = c_img;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(c_imgTag, cx, cy, cw, ch);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	//Define function to move the car upward
	if (cy >= 90) {
		cy = cy - 10;
		console.log("New coordinates of the Green Car are: x = " + cx + "| y = " + cy);
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	//Define function to move the car downward
	if (cy <= 250) {
		cy = cy + 10;
		console.log("New coordinates of the Green Car are: x = " + cx + "| y = " + cy);
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	//Define function to move the car left side
	if (cx >= 0) {
		cx = cx - 10;
		console.log("New coordinates of the Green Car are: x = " + cx + "|| y = " + cy);
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	//Define function to move the car right side
	if (cx <= 725) {
		cx = cx + 10;
		console.log("New coordinates of the Green Car are: x = " + cx + "|| y = " + cy);
		uploadBackground();
		uploadgreencar();
	}
}