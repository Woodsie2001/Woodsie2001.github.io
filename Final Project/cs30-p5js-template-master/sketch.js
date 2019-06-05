// Firework Simulator 
// Conner

let p = [];
let radio; 
let slider1;
let slider2;
let slider3;


function setup() {
	noStroke();
	createCanvas(windowWidth, windowHeight);
	radio = createRadio();
	radio.option('Circle');
	radio.option('Square');
	radio.position(50, 50);
	radio.style('width', '55px');
	textAlign(CENTER);
	fill(255, 255, 255)

	slider1 = createSlider(0, 255, 120);
	slider1.position(25, 150);
	slider1.style('width', '180px');

	slider2 = createSlider(0, 255, 120);
	slider2.position(25,200);
	slider2.style('width', '180px');

	slider3 = createSlider(0, 255, 120);
	slider3.position(25, 250);
	slider3.style('width', '180px');
	
}

function draw() {
	background(0, 5);
	for (let i = 0; i < p.length; i++) {
		p[i].show();
		p[i].move();
	}
}


function keyPressed() {
	if (key === " "){
		if (radio.value() === 'Circle'){
			for (let i = 0; i < 500; i++) {
				p.push(new Particle());
			}
		}
		if (radio.value() === 'Square'){
			for (let i = 0; i < 500; i ++){
				p.push(new Particle1());
			}
		}
	}
}

class Particle {
	constructor(f_) {
		this.color = color(slider1.value(), slider2.value(), slider3.value());
		this.x = width/2;
		this.y = height/2;
		this.xSpeed = random(-5, 5);
		this.ySpeed = random(-5, 5);
	}

	show() {
		fill(this.color);
		ellipse(this.x, this.y, 5, 6);
	}

	move() {
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}

class Particle1 {
	constructor() {
		this.color = color(slider1.value(), slider2.value(), slider3.value());
		this.x = width/2;
		this.y = height/2;
		this.xSpeed = random(-5, 5);
		this.ySpeed = random(-5, 5);
	}

	show() {
		fill(this.color);
		rect(this.x, this.y, 10, 10);
	}

	move() {
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}