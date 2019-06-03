// Firework Simulator 
// Conner

let p = [];
let repeller;
let ParticleSystem;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	ps = new ParticleSystem(new PVector(width/2, 50));
	repeller = new Repeller(width/2-20, height/2-20);
}

function draw() {
	background(0, 5);
	for (i = 0; i < p.length; i++) {
		p[i].show();
		p[i].move();
	}
	ps.addParticle();
	PVectorgravity = new PVector(0, 0.1);
	ps.applyForce(gravity);
	ps.applyRepeller(repeller);
	ps.run();
	repeller.display();
}

function drawHSB(yPos){
	colorMode(HSB, 360);
	  fill( x % 360 , 280 , 330 );
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

class Particle {
	constructor() {
		this.color = drawHSB
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
		this.color = drawHSB
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
}