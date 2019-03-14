// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
  noStroke();
}

function draw() {
  generateTerrain();
}


function generateTerrain() {

  let yOff = 0;
  let xoff = start;
  for (let x = 0; x < width; x++) {
    let y = noise(xoff) * height;
    vertex(x,y);
    xoff += inc;

    fill(0);
    //fill(0);
    rect(x, y, 0.1, height - y); x += 1;
  }
  start + inc;
}