// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  for (x = 0; x <= width; x += 10){
    for (y = 0; y <= height; y += 10){
      fill(random(255), random(255), random(255));
      rect(x, y, 10, 10);
    }
  }
}