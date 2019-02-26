// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  line(0, windowHeight/2, windowWidth, windowHeight/2);
  line(windowWidth/2, 0, windowWidth/2, windowHeight);
  if (mouseX >= windowWidth/2 && mouseY <= windowHeight/2){
    quad();
  }

}

function quad(){ 
  fill(0);
}
