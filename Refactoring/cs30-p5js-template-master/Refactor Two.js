// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup(){
  createCanvas(480, 270);
}
function draw() {
  background(255);
  stroke(0);
  //Creating Background
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);
  //Drawing Lines
  noStroke();
  fill(0);
  //Creating Fill 
  
  if (mouseX < 240 && mouseY < 135) rect(0, 0, 240, 135);
  //Creating Square
  else if (mouseX > 240 && mouseY < 135) rect(240, 0, 240, 135);
  //Creating Square
  else if (mouseX < 240 && mouseY > 135) rect(0, 135, 240, 135);
  //Creating Square
  else if (mouseX > 240 && mouseY > 135) rect(240, 135, 240, 135);
  //Creating Square
}