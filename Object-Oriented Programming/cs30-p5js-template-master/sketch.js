let myWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myWalker = new Walker(width/2, height/2);
}

function draw() {
  background(220);
  myWalker.display();
}

class Walker {
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(random(255), random(2550), random(255));
    this.speed = 10;
    this.size = 5;
  }
  display(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
  }
}
