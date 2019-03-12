// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let x = map(noise(xoff), 0, 1, 0, width);

  xoff += 0.001;

  ellipse(x, 200, 24, 24);
}
