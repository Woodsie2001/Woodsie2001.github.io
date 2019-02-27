// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quad = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function determinequad(){
  if (mouseX < width/2){
    if (mouseY < height/2) quad = 1;
    else quad = 3;
  }
  else{
    if (mouseY < height/2) quad = 2;
    else quad = 4;
  }
}

function drawSquare(){
  if (quad === 1){
    rect(0, 0, width/2, height/2);
    fill (0);
  }
  if (quad === 2){
    rect(width/2, 0 , width/2, height/2);
    fill(0);
  }
  if (quad === 3){
    rect(0, height/2, width/2, height/2);
    fill(0);
  }
  if (quad === 4){
    rect(width/2, height/2, width/2, height/2);
    fill(0);
  }
}

function draw() {
  background(255);
  line(0, windowHeight/2, windowWidth, windowHeight/2);
  line(windowWidth/2, 0, windowWidth/2, windowHeight);
  determinequad();
  drawSquare();
}


