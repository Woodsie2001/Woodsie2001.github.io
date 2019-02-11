// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(2000, 1000);
  
}

function draw() {
  background(0,0,0);
  keyTyped();
  textSize(50);
  textFont("Georgia");
  text("Conner Woods", 10, 30);
  fill(random(255),random(255),random(255));
}

function keyTyped() {
  if (key === "a") {
    fill(random(255), random(255), random(255));
    rect(mouseX,mouseY, 150, 200);
  }
  if (key === "s"){
    fill(random(255), random(255), random(255));
    ellipse(mouseX,mouseY,300,200 );
  }
  if (key === "d"){
    fill(random(255), random(255), random(255));
    quad(mouseX, mouseY, mouseX - 25, mouseY + 25, mouseX, mouseY +50, mouseX +25, mouseY + 25);
  }
}
