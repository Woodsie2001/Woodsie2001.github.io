// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
let y = 200;
let Rsize = 50;
let mouseover = false; 
let pickedup = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  fill(150, 0, 0);
  if(mouseX >= x - Rsize/2 && mouseX <= x + Rsize/2){
    if (mouseY >= y - Rsize/2 && mouseY <= y + Rsize/2){
      fill(random(255), random(255), random(255));
    }
  }
  rect(x, y, Rsize, Rsize);
}
