// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let slider1;
let slider2;
let slider3;
let radio;
let picker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider1 = createSlider(0, 255, 120);
  slider1.position(50, 50);
  slider1.style('width', '180px');

  slider2 = createSlider(0, 255, 120);
  slider2.position(50,75);
  slider2.style('width', '180px');

  slider3 = createSlider(0, 255, 120);
  slider3.position(50, 100);
  slider3.style('width', '180px');

  radio = createRadio();
  radio.option('Circle');
  radio.option('Rectangle');
  radio.position(50, 125);
  radio.style('width', '60px');
  textAlign(CENTER);

  picker = createColorPicker(color("yellow"));
  picker.position(50, 200);
  
}

function draw() {
  background(slider1.value(), slider2.value(), slider3.value());
  if (radio.value() === "Rectangle"){
    rect(width/2, height/2, 100, 100);
  }
  if (radio.value() === "Circle"){
    ellipse(width/2, height/2, 50);
  }
  fill(picker.value());
}