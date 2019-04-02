let ballObjects = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  ballObjects.push( new Ball (mouseX, mouseY) );
}

function draw() {
  background(220);
  for (let currentBall of ballObjects){
    currentBall.move();
    currentBall.mouseOver();
    currentBall.display();
  }
}

class Ball{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
    this.size = 30;
    this.gravity = 0.1;
  }
  display(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
    //fill(random(255) ,random(255), random(255));
  }
  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.ySpeed += this.gravity;

    if (this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    }
    if (this.y > height){
      this.ySpeed *= -0.92;
      this.y = height;
    } 
  }
  mouseOver(){
    let d = dist(this.x, this.y, mouseX,mouseY);
    if (d < this.size / 2){
      fill(20,80,200);
    }
    else{
      fill(255);
    }
  }
}
