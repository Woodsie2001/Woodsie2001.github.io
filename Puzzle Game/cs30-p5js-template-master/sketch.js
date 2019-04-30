let winningb = 10;
let winningw = 10;
let current_col, current_row;
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;

let gridData = [[0,   255, 0,   255, 0],
               [ 255, 0,   255, 0,   255],
               [ 0,   255, 0,   255, 0],
               [ 255, 0,   255, 0,   255]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = windowWidth / NUM_COLS;
  rectHeight = windowHeight / NUM_ROWS;
}

function drawGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0) {
      gridData[row][col] = 255;
      winningb -= 1;
      winningw += 1;
    }
    else {
      gridData[row][col] = 0;
      winningw -= 1;
      winningb += 1;
    }
  }
}

function win(){
  if (winningb === 20 || winningw === 20){
    textAllign(CENTER);
    print("You Win", width/2, height/2);
  } 
}

function determineActiveSquare() {
  current_col = int(mouseX / rectWidth);
  current_row = int(mouseY / rectHeight);
  print(current_col, current_row);
}

function draw() {
  drawGrid();
  determineActiveSquare();
  win();
}

function mousePressed() {
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