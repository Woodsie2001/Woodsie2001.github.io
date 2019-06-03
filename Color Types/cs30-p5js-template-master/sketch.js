// Colors Solutions Demo

let rectWidth = 10;
let rectHeight = 50;
let colors = ["#92A6D0", "7C97D0", "#2E4F93", "#1C305A", "#152444"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRowRGB(height * 0.2);
  drawRowHSB(height/2);
  drawRowCustom(height * 0.8);
}

function drawRowCustom(yPos){
  colorMode(RGB);
  let counter = 0
  for (let x = 0; x < width; x += rectWidth){
    //fill(colors[counter % 5]);
    fill(colors[int(random(colors.length))]);
    rect(x, yPos, rectWidth, rectHeight);
    counter ++;
  }
}

function drawRowHSB(yPos){
  colorMode(HSB, 360);
    fill( x % 360 , 280 , 330 );
}

function drawRowRGB(yPos){
  colorMode(RGB);
  for (let x = 0; x < width; x += rectWidth){
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function draw() {
  //background(220);
}
