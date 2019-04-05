//Chess Board
function setup() {
  createCanvas(600, 600);
  noLoop();
}

let color = 0;
//Setting Variable

function chess() {
  for (let x = 0; x < 525; x += 75) {
    for (let y = 0; y < 525; y += 75) {
      if (color === 255) {
        color = 0;
        //Setting Color
      }
      else {
        color = 255;
        //Setting Color
      }
      fill(color);
      rect(x, y, 75, 75);
      //Drawing Rectangles
    }
  }
}




function draw() {
  chess();
}