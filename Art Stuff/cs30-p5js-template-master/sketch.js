// Art Project
// Conner Woods
// May 2nd

// My original Idea for this project was to make something neon as i did which took a long time and to create something with the
// squares i did use the demo code as some help to get me going as it was what i wanted to create.

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    //Centering Shapes
  }
  
  function draw() {
    randomSeed(4.9092);
    rectangles(width/2,height/3, width* .6, height * .4);
  }
  
  function rectangles(x,y,sideLength){
    if(sideLength > 5){x
      fill(random(255),random(255),0,200);
      //Random Fill Values
      rect(x,y,sideLength,sideLength);
      let half = sideLength/2;
      rectangles(x-half,y-half,half);  
      rectangles(x-half,y+half,half);  
      rectangles(x+half,y-half,half);  
      rectangles(x+half,y+half,half);  
      //Drawing Rectangles 
    }
  
  }
