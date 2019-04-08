//Black and White Target
function setup() {
  createCanvas(400, 400);
}
  
function circles(){
  for (let x = 400; x > 40; x -= 40){
    //Looping
    ellipse(200, 200, x, x); 
    //Drawing Circles
  }
}
  
function draw() {
  background(240);
  circles();
  //Calling Function
}