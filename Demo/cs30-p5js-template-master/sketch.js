// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX, buttonY, buttonSize;
let rectX, rectY, rectW, rectH;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width/2; 
  buttonY = height/4;
  buttonSize = 50;
  rectX = width/2;
  rectY = height/1.8;
  rectH = height * 0.4; 
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function mouseDistance(x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return c;
}


function draw() {
  print(mouseDistance(mouseX, mouseY, buttonX, buttonY));
  background(255);
  
  ellipse(buttonX, buttonY, buttonSize, buttonSize);
  rect(rectX, rectY, rectY, rectH);
}
