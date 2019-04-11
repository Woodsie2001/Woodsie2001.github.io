// Color Grid
// Conner Woods
// March 8th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let rectSize = 10;
//creating size for squares

function mousePressed(){
  if (mouseButton === LEFT){
    rectSize = rectSize + 2;
    colorGrid();
    //making sqaures bigger
  }
  if (mouseButton === RIGHT){
    rectSize = rectSize - 2;
    if (rectSize < 1){
      rectSize = 10;
    }
    colorGrid();
    //making squares smaller
  }
}

function colorGrid(){
  for (x = 0; x <= width; x += rectSize){
    for (y = 0; y <= height; y += rectSize){
      fill(random(100, 150), 0, random(200, 255));
      rect(x, y, rectSize, rectSize);
      //creating squares  
    }
  }
}

function keyPressed(){
  colorGrid();
  //reseting colors
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  //Stuff
}

function draw() {
  colorGrid();
  mousePressed();
  keyPressed();
  //putting everything together
}