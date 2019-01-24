var x = 0;
var y = 0;
var x2 = 50;
var y2 = 0;

function setup() {
  var myCanvas = createCanvas(1280, 720);
  myCanvas.parent('myContainer');
  background("#887ec8");
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  ellipse(width/2, height/2, 90, 90);

  var img = loadImage('post.jpg');
  image(img, 0, 0);

}

function draw() {
  // if (mouseIsPressed) {
  //   fill("#bfdcee");
  // } else {
  //   fill("#f6de87");
  // }
  // ellipse(mouseX, mouseY, 300, 300);




  if (mouseIsPressed){
    rect(x2, y2, 30, 30);
    x2 = x2 + 30;
    y2 = y2 + 30;
    fill("#f6de87");
  }else{
    ellipse(x, y, 30, 30);
    x = x + 30;
    y = y + 30;
  }
}

function drawCat(img) {
  image(img, 0, 0);
}
