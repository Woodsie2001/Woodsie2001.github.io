// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function generateTerrain(){
  for (let x = 0; x <= width; x += random){
    for (let y = 0; y <= height; y += random){
      rect(10, 10, x, y);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  generateTerrain();
}
