let a;
let b;
let c;
let d;
//Setting my Variables 

function setup() {
    createCanvas(windowWidth, windowHeight);
    a = 200; 
    b = 300; 
    c = random(3,8); 
    d = random(3,8);
    //Declaring my Variables
}

function draw() {
    movement();
    background(80,80,80);
    rect(a, b, 250, 75);
    //Creating Rectangle 
}
function movement(){
    a += c; 
    b += d;

    if (b >= height - 75|| b <= 0){
        (d = d *- 1)
        //Setting Up movement    
    }
    if (a >= width - 250|| a <= 0){
        (c = c *- 1)  
        //Setting up Movement
    } 
}