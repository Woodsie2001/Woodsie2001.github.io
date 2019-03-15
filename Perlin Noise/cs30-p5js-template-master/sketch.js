// Perlin Noise Terrain Generation
// Conner Woods
// March 15th 
//
// Extra for Experts:
// - I made my random terrain slide across the screen 

let inc = 0.01;
let start = 0;
//Variables

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  generateTerrain();
  //calling function
}

function generateTerrain(){
  background(173, 216, 255);
  stroke(255);
  noFill();
  beginShape();
  //Start
  let xOff = start;
  let x = 0;
  for (let x = 0; x <= width; x++) {
    stroke(255);
    let y = noise(xOff) * height;
    rect(x, y, 1, height);
    xOff += inc;
    //Drawing Stuff 
  }
  endShape();
  //End
  start += inc;
  //Sliding across screen
}