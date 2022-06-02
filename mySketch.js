
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}
	var x=0,y=0
	function draw() {
noFill();
		
	background(0);
	for(var x=0;x<width;x=x+100){
		for(var y=0;y<height;y=y+100){
			stroke("#AA0000");
			strokeWeight(2.5)
			ellipse(x, y,50+mouseY/3);
			
	noFill();
			stroke("#FFAA33");
			circle(x, y,50+mouseY/3);
			stroke("#008800");
	    rectMode(CENTER);
      circle(x, y,100+mouseY/2);
		}
	}
	}