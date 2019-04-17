// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    push();
    translate(width/2, height/3);

    for (let i = 0; i < 360; i += 6){ 
        push();
        rotate(radians(i));
        if (i % 30  === 0){
        rect(75, 0, 200, 10);
        }
        pop();
    }
    pop();
}