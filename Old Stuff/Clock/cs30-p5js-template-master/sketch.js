// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  push();
  translate(width/2, height/2);

  for (let i = 0; i < 360; i += 6){ 
    push();
    rotate(radians(i));
    if (i % 30 === 0){
      strokeWeight(2);
      rect(50, 100, 240, 0);
      rect(100, 50, 240, 0);
      rect(50, 100, 0, 240);
      rect(100, 50, 0, 240);
    }
    pop();
  }
  pop();
}
