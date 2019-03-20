// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pinImages = [];
let counter = 0;
let speed = 1;
  //1 - left
  //2 - right
function preload(){
  for (let i = 1; i < 6; i++){
    pinImages.push(loadImage('assets/Walking Right ' + i + '.png', 100,100));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(60);
}

function draw() {
  background(220);
  image(pinImages[counter],width/2,height/2);
  if (frameCount % 2 === 0){
    counter ++;
    if (counter > 4) counter = 0;
  }
  
}
