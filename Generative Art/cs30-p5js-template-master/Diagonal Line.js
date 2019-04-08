// Diagonal Line Generator
const spacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function diagonalA(x, y, s){
  line(x-s/2, y+s/2, x+s/2, y-s/2);
}

function diagonalD(x, y, s){
  line(x-s/2, y-s/2, x+s/2, y+s/2);
}

function draw() {
  background(220);
  for (let x = spacing/2; x < width - spacing/2; x+= spacing){
    for (let y = spacing/2; y < height - spacing/2; y += spacing){
      if (int(random(2)) === 0){
        diagonalD(x, y, spacing);
      }
      else{
        diagonalA(x, y, spacing);
      }
    }
  }
}
