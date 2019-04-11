// Art Replecation
// Conner
// April 11th 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  noLoop();
}

function horizontal(){
  let newx = random(width);
  line(x, y, newx, y);
  x = newx;
}

function vertical(){
  let newy = random(height);
  line(x, y, x, newy);
  y = newy;
}

function draw() {
  //background(255);
  for (let z = 0; z < 60; z ++){
    horizontal();
    vertical();
  }
}
