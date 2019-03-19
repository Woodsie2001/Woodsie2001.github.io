// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionl, lionr;

function preload(){
  lionl = loadImage('assets/lion-left.png');
  lionr = loadImage('assets/lion-right.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(lionl,0,0);
}
