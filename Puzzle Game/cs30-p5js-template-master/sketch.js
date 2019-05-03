// Puzzle Game
// Conner Woods
// May 3rd, 2019
//
// Extra for Experts:
// - This was not worth 5 points hahahaha.

let randomNum;
let winB = 0;
let winW = 0;
let current_col, current_row;
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;x
let gridData = [[ , , , , ],
               [ , , , , ],
               [ , , , , ],
               [ , , , , ]];
//Setting my variables

function randomNumberizer() {
  //Picking random black or white values
  randomNum = int(random(0,2));
  if (randomNum === 1) {
    winW += 1;
    return 255;
  }
  else {
    winB += 1;
    return 0;
  }
}

function randomizeBoard() {
  //Creating random rectangles
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      gridData[y][x] = randomNumberizer();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = windowWidth / NUM_COLS;
  rectHeight = windowHeight / NUM_ROWS;
  randomizeBoard();
  //Calling function
}

function drawGrid() {
  //Creating rectangles for grid
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function flip(col, row) {
  //Flipping colors
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
  //Determining if you win
  if (winB === 20 || winW === 20) {
    textSize(100);
    textAlign(CENTER);
    fill(random(255), random(255), random(255));
    text("You Win!!", width/2, height/2);
  }
}

function determineActiveSquare() {
  //Where mouse is
  current_col = int(mouseX / rectWidth);
  current_row = int(mouseY / rectHeight);
}

function draw() {
  //Calling functions
  drawGrid();
  determineActiveSquare();
  ifWin();
}

function mousePressed() {
  //Left click or right click?
  if (mouseButton === LEFT) {
    flip(current_col + 1, current_row);
    flip(current_col - 1, current_row);
    flip(current_col, current_row + 1);
    flip(current_col, current_row - 1);
    flip(current_col, current_row);
  }
  if (mouseButton === RIGHT) {
    flip(current_col, current_row);
  }
}