// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Speed = 0;
let pinImages = [];
let counter = 0;
let Speed1 = 0;

function preload() {
  for (let i = 1; i < 6; i++) {
    pinImages.push(loadImage('assets/Walking Right ' + i + '.png', 100, 100));
  }
  for (let j = 1; j < 6; j++){
    pinImages.push(loadImage('assets/Walking Left ' + j + '.png', 100, 100));
  }
  for (let z = 1; z < 6; z++){
    pinImages.push(loadImage('assets/Walking Up ' + z + '.png', 100, 100));
  }
  for (let q = 1; q < 6; q++){
    pinImages.push(loadImage('assets/Walking Down ' + q + '.png', 100, 100));
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(60);
}

function draw() {
  frameRate(40);
  background(255);
  image(pinImages[counter], Speed, Speed1, 100, 200);

  if (key === "ArrowRight"){
    Speed++;
    if (frameCount % 2 === 0) {
      counter ++;
      if (counter > 4) counter = 0;
    }
  }
  if (key === "ArrowLeft"){
    Speed--;
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 9) counter = 5;
    }
  }
  if (key === "ArrowUp"){
    Speed1 --;
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 14) counter = 10;
    }
  }
  if (key === "ArrowDown"){
    Speed1 ++;
    if (frameCount % 2 === 0){
      counter ++; 
      if (counter > 19) counter = 15
    }
  }
}
