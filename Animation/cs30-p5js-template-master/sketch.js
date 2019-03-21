// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Speed1 = 0;
let Speed = 0;
let pinImages = [];
let pinImages1 = [];
let counter = 0;
let speed = 1;

function preload(){
  for (let i = 1; i < 6; i++){
    pinImages.push(loadImage('assets/Walking Right ' + i + '.png', 100,100));
  }
  for (let j = 1; j < 6; j++){
    pinImages1.push(loadImage('assets/Walking Left' + j + '.png', 100, 100));
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(60);
}

function draw() {
  background(255);
  if (key === "ArrowRight"){
    Speed ++;
    image(pinImages[counter],Speed,height/2, 100, 200);
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 4) counter = 0;
    }
  }
  if (key === "ArrowLeft"){
    Speed1--;
    image(pinImages1[counter], Speed1, height/2, 100, 200);
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 4) counter = 0;
    }
  }
}
