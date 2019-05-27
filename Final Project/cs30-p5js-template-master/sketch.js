// Firework Simulator 
// Conner

let p = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function mouseClicked() {
	for (i = 0; i < 1000; i++) {
		p.push(new Particle);
	}
}

function draw() {
	background(0, 5);
	for (i = 0; i < p.length; i++) {
		p[i].show();
		p[i].move();
	}
}

class Particle {
	constructor() {
		this.x = mouseX;
		this.y = mouseY;
		this.xSpeed = random(-5, 5);
		this.ySpeed = random(-5, 5);
	}

	show() {
		ellipse(this.x, this.y, 5, 5);
	}

	move() {
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}

