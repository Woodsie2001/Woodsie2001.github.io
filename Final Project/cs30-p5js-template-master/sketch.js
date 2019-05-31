// Firework Simulator 
// Conner

let p = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	background(0, 5);
	for (i = 0; i < p.length; i++) {
		p[i].show();
		p[i].move();
	}
}



function keyPressed() {
	if (key === "q"){
		for (i = 0; i < 500; i++) {
			p.push(new Particle);
		}
	}
	if (key === "w"){
		for (i = 0; i < 500; i++) {
			p.push(new Particle1);
		}
	}
	if (key === "e"){
		for (i = 0; i < 500; i ++){
			p.push(new Particle2);
		}
	}
}

class Particle {
	constructor() {
		this.color = color(random(255), random(255), random(255))
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
		this.color = color(random(255), random(255), random(255))
		this.x = width/2;
		this.y = height/2;
		this.xSpeed = random(-5, 5);
		this.ySpeed = random(-5, 5);
	}

	show() {
		fill(this.color);
		rect(this.x, this.y, 40, 40);
	}

	move() {
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}

class Particle2 {
	constructor() {
		this.color = color(random(255), random(255), random(255))
		this.x = width/2;
		this.y = height/2;
		this.xSpeed = random(-5, 5);
		this.ySpeed = random(-5, 5);
	}

	show() {
		fill(this.color);
		(this.x, this.y, 40, 40);
	}

	move() {
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}