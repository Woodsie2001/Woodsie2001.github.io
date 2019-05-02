// Puzzle Game
// Conner Woods
// May 1st, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let winB = 10;
let winW = 10;
let current_col, current_row;
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
// Setting Variables

let gridData = [[0, 255, 0, 255, 0],
               [ 255, 0, 255, 0, 255],
               [ 0, 255, 0, 255, 0],
               [ 255, 0, 255, 0, 255]];
               // Making Grid


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = windowWidth / NUM_COLS;
  rectHeight = windowHeight / NUM_ROWS;
  //Settting Size
}

function drawGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      //Drawing Grid
    }
  }
}

function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0) {
      gridData[row][col] = 255;
      winB -= 1;
      winW += 1;
    }
    else {
      gridData[row][col] = 0;
      winW -= 1;
      winB += 1;
    }
  }
}

function ifWin() {
  if (winB === 20 || winW === 20) {
    textSize(150);
    textAlign(CENTER);
    fill(0, 255, 0);
    text("You Win!!", width/2, height/2);
    //Determining if you win
  }
}

function determineActiveSquare() {
  current_col = int(mouseX / rectWidth);
  current_row = int(mouseY / rectHeight);
  print(current_col, current_row);
  //Finding the mouse
}

function draw() {
  drawGrid();
  determineActiveSquare();
  ifWin();
  //Declaring functions
}

function mousePressed() {
  if (mouseButton === LEFT) {
    flip(current_col + 1, current_row);
    flip(current_col - 1, current_row);
    flip(current_col, current_row + 1);
    flip(current_col, current_row - 1);
    flip(current_col, current_row);
    //Plus Sign
  }
  if (mouseButton === RIGHT) {
    flip(current_col, current_row);
    //Cheater Cheater
  }
}