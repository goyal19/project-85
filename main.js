canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d")
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width = 75;
greencar_height = 100;
greencar_x
greencar_y

function add() {
	background_img_tag = new Image();
	background_img_tag.onload = uploadgreencar;
	background_img_tag.src = background_image;

	greencar_imgTag = new();
	greencar_img_tag.onload = uploadgreencar;
	greencar_img_tag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	
		ctx.drawImage(greencar_img_tag, greencar_x, greencar_y, greencar.width, greencar.height);
		

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	(
		greencar_y = greencar_y = 10;
		console.log("when up arrow is pressed,  x= " + greencar_x + "  y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
	)
}

function down()
{
	if(greencar_y >=0)
	(
		greencar_y = greencar_y = 10;
		console.log("when down arrow is pressed,  x= " + greencar_x + "  y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
	)
}

function left()
{
	if(greencar_y >=0)
	(
		greencar_y = greencar_y = 10;
		console.log("when left arrow is pressed,  x= " + greencar_x + "  y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
	)
}

function right()
{
	if(greencar_y >=0)
	(
		greencar_y = greencar_y = 10;
		console.log("when right arrow is pressed,  x= " + greencar_x + "  y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
	)
}
