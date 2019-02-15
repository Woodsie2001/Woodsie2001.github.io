// Primitive Paint
// Conner Woods
// Feb 14th 
//RAINBOW!!!!!!!!!!!!!!!!!
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(2000, 1000);
  
}

function draw() {
  //background(255,255,255);
  textSize(50);
  textFont("Georgia");
  text("Conner Woods", 10, 50);
  //Creating My Name
  fill(random(255),random(255),random(255));
  triangle(random(0,2000), random(0,1000), random(0,1000), random(0,2000), random(0,1000), random(0,1000));
  //Creating Random Triangles

}

function keyTyped() {
  if (key === "a") {
    fill(random(255), random(255), random(255));
    //RAINBOW
    rect(mouseX,mouseY, 150, 200);
    //Creating Rectangle

  }
  if (key === "s"){
    fill(random(255), random(255), random(255));
    //RAINBOW
    ellipse(mouseX,mouseY,300,200 );
    //Creating Ellipse

  }
  if (key === "d"){
    fill(random(255), random(255), random(255));
    //RAINBOW
    quad(mouseX, mouseY, mouseX - 25, mouseY + 25, mouseX, mouseY +50, mouseX +25, mouseY + 25);
    //Creating Quad

  }
  if (key === " "){
    background(255);
    //Wiping Screen

  }
  

}
