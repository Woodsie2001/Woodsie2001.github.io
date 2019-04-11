// State Variables 
// Conner Woods
// April 5th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fadeIn;
let quadrant;

let fill1 = 0; //Top Left
let fill2 = 0; //Bottom Left
let fill3 = 0; //Top Right
let fill4 = 0; //Bottom Right

function setup() {
  createCanvas(windowWidth, windowHeight);
}



//Tracking Mouse
function determineQuadrant() {
  if (mouseX < width/2) { 
    if (mouseY < height/2) {
      quadrant = 1;
    }
    else{
      quadrant = 2;
    }
  }
  else{
    if (mouseY < height/2){
      quadrant = 3;
    }
    else {
      quadrant = 4;
    } 
  }
}

function fillChange(){

  //QUAD 1 (top left)
  if(quadrant === 1) {
    if(fill1 < 255){
      fill1 = fill1 += 5;
    }
  }
  else {
    if (fill1 > 0){
      fill1 = fill1 -= 5;
    }
  }

  //QUAD 2 (bottom left)
  if(quadrant === 2) {
    if(fill2 < 255){
      fill2 = fill2 += 5;
    }
  }
  else {
    if (fill2 > 0){
      fill2 = fill2 -= 5;
    }
  }

  //QUAD 3 (top right)
  if(quadrant === 3) {
    if(fill3 < 255){
      fill3 = fill3 += 5;
    }
  }
  else {
    if (fill3 > 0){
      fill3 = fill3 -= 5;
    }
  }

  //QUAD 4 (top left)
  if(quadrant === 4) {
    if(fill4 < 255){
      fill4 = fill4 += 5;
    }
  }
  else {
    if (fill4 > 0){
      fill4 = fill4 -= 5;
    }
  }

}

function drawSquares(){
  rectMode(CENTER);
  noStroke();

  fillChange();
  fill(fill1);
  rect(width/4, height/4, width/2, height/2);

  fill(fill2);
  rect(width/4, height-height/4, width/2, height/2);

  fill (fill3);
  rect(width-width/4, height/4, width/2, height/2);

  fill (fill4);
  rect(width-width/4, height-height/4, width/2, height/2);
}




function draw() {
  determineQuadrant();
  drawSquares();
}