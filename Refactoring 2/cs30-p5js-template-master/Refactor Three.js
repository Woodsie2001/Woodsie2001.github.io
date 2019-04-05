//Black and White Target
function setup() {
  createCanvas(400, 400);
}

function circles(){
  for (let x = 0; x > 40; x -= 40){
    ellipse(200, 200, x, x); 
  }
}

function draw() {
  background(240);
  circles();
}