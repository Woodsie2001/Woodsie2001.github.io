// Sprite Animation
// Conner Woods
// March 26th
//
// Extra for Experts:
// - I Made each direction have its own animation, you control Yoshi with the arrow keys 

let Speed = 0;
let pinImages = [];
let counter = 0;
let Speed1 = 0;


function preload() {
  for (let i = 1; i < 6; i++) {
    pinImages.push(loadImage('assets/Walking Right ' + i + '.png', 100, 100));
    //Walking Right Pictures
  }
  for (let j = 1; j < 6; j++){
    pinImages.push(loadImage('assets/Walking Left ' + j + '.png', 100, 100));
    //Walking Left Pictures
  }
  for (let z = 1; z < 6; z++){
    pinImages.push(loadImage('assets/Walking Up ' + z + '.png', 100, 100));
    //Walking Up Pictures
  }
  for (let q = 1; q < 6; q++){
    pinImages.push(loadImage('assets/Walking Down ' + q + '.png', 100, 100));
    //Walking Down Pictures
  }
  for (let w = 1; w < 6; w++){
    pinImages.push(loadImage('assets/Idle ' + w + '.png', 100, 100));
    //Idle Animation Pictures
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(60);
  background(255);
  
  image(pinImages[counter], Speed, Speed1, 100, 200);

  if (key === "ArrowRight"){
    //Moving Right
    Speed++;
    if (frameCount % 2 === 0) {
      counter ++;
      if (counter > 4) counter = 0;
    }
  }
  if (key === "ArrowLeft"){
    //Moving Left
    Speed--;
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 9 || counter < 5) counter = 5;
    }
  }
  if (key === "ArrowUp"){
    //Moving Up
    Speed1 --;
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 14 || counter < 10) counter = 10;
    }
  }
  if (key === "ArrowDown"){
    //Moving Down
    Speed1 ++;
    if (frameCount % 2 === 0){
      counter ++; 
      if (counter > 19 || counter < 15) counter = 15;
    }
  }
  if (key === " "){
    //Idle Animation
    if (frameCount % 2 === 0){
      counter++;
      if (counter > 24 || counter < 20) counter = 20;
    }
  }
}