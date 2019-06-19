// CS30 - Final Programming Challenge
// Complete this comment header - - - (it's being graded!)

// Final Project 
// June 19th 
// Conner Woods



let staticImages = [];    
let counter = 0;
let Speed = 0;
let Speed1 = 0;
let size = 100;


function preload(){
  //Loading all my Images
  for (let j = 1; j < 9; j++){
    staticImages.push(loadImage('assets/right' + j + '.png', 100, 100));  
  }
  for (let i = 1; i < 9; i++){
    staticImages.push(loadImage('assets/left' + i + '.png', 100, 100));   
  }
  for (let z = 1; z < 9; z++){
    staticImages.push(loadImage('assets/up' + z + '.png', 100, 100));   
  }
  for (let x = 1; x < 9; x++){
    staticImages.push(loadImage('assets/down' + x + '.png', 100, 100));  
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  // Setting Size
  if (mouseY > width/2){
    size = size + 25;
    if (size === 200){
      size = size - 100;
    }
  }
  if (mouseY < width/2){
    size = size - 25;
    if (size === 0){
      size = size + 100;
    }
  }
}

function draw() {
  background(220);
  image(staticImages[counter], Speed, Speed1, size, size);  

  if (key === "d"){
    //Moving Right
    Speed++;
    if (frameCount % 2 === 0) {
      counter ++;
      if (counter > 7) counter = 0;
    }
  }
  if (key === "a"){
    //Moving Left
    Speed--;
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 15 || counter < 8) counter = 8;
    }
  }
  if (key === "w"){
    //Moving Up
    Speed1 --;
    if (frameCount % 2 === 0){
      counter ++;
      if (counter > 23 || counter < 16) counter = 16;
    }
  }
  if (key === "s"){
    //Moving Down
    Speed1 ++;
    if (frameCount % 2 === 0){
      counter ++; 
      if (counter > 31 || counter < 24) counter = 24;
    }
  }
  if (key === "p"){
    Speed = Speed + random(30);
    Speed = Speed - random(30);
    Speed1 = Speed1 + random(30);
    Speed1 = Speed1 - random(30); 
  }
  if (key === "r"){
    Speed = width/2;
    Speed1 = height/2;
  }
}

