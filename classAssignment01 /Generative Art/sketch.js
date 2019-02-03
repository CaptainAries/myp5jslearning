var angle = 0;
var rectHeight=1000;
var ellipseWidth=50;
var diff=5;

function setup() {
  var myCanvas =   createCanvas(windowWidth, windowHeight);
  myCanvas.parent('canvas-container');
	noStroke();
	rectMode(CENTER);
	frameRate(60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	blendMode(MULTIPLY);

	push();

	translate(width/2, height/2);

//ellipse group
	firstellipse();
	thirdellipse();
	fifthellipse();
	seventhellipse();
	ninethellipse();
  eleventhellipse();
//rect group
  secondrect();
  fourthrect();
  sixthrect();
  eightrect();
  thenthrect();


	pop();

	blendMode(NORMAL);
//shapes angle
	angle = angle + 0.0001;

//rect height
	if(rectHeight > 1000 || rectHeight < 180){
		diff*=-1;
	}

	rectHeight = rectHeight+diff;

//ellipse width

  if(ellipseWidth > 50 || ellipseWidth < 8){
		diff*=-1;
	}

	ellipseWidth = ellipseWidth+diff;


}
