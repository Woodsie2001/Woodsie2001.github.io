// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let i;

function setup() {
  createCanvas(400, 400);
  noLoop();  //will only run draw() one time.
}

function printOdds(){
  for ( i = 1; i < 101; i += 2) {
    print(i);
  }

}

function draw() {
  printOdds();


  //uncomment the line(s) below to invoke the function(s) you want to test.
	
  //repeatTalk("CS 30");    //should print 1000 lines of "CS 30"
  //printOdds();					  //prints all odd numbers from 1 to 100
}

//define your repeatTalk function below


//define your printOdds function below

