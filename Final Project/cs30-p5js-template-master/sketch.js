// Firework Simulator 
// Conner

let p = [];
let radio; 
let slider1;
let slider2;
let slider3;
let input;
//Setting my Variables 

function setup() {
	noStroke();
	createCanvas(windowWidth, windowHeight);

	radio = createRadio();
	radio.option('Circles');
	radio.option('Squares');
	radio.option('Circles with Gravity')
	radio.option('Squares with Gravity')
	radio.style("color", "white");
	radio.position(50, 50);
	radio.style('width', '55px');
	textAlign(CENTER);
	fill(255, 255, 255)
	//Creating my shape option

	slider1 = createSlider(0, 255, 120);
	slider1.position(25, 275);
	slider1.style('width', '180px');
	//Creating red value slider

	slider2 = createSlider(0, 255, 120);
	slider2.position(25, 325);
	slider2.style('width', '180px');
	//Creating green value slider

	slider3 = createSlider(0, 255, 120);
	slider3.position(25, 375);
	slider3.style('width', '180px');
	//Creating blue value slider

	input = createInput();
	input.position(25, 430);
	//Creating Input 
}

function draw() {
		background(0, 5);
		for (let i = 0; i < p.length; i++) {
			p[i].show();
			p[i].move();
			//Shade effect when program starts 
		}
	textAlign(CENTER);
	textSize(15);
	text("Red Value", 75, 310);
	text("Green Value", 75, 360);
	text("Blue Value", 75, 410);
	text("Num Value", 75, 475);
	//Naming Sliders and Input 
}


function keyPressed() {
	let Num = input.value();
	//Setting Num variable as my Input Number 
	if (key === " "){
		if (Num > 0){
			if (radio.value() === 'Circles'){
				for (let i  = 0; i < Num; i++) {
					p.push(new Particle());
				}
			}
			if (radio.value() === 'Squares'){
				for (let i = 0; i < Num; i ++){
					p.push(new Particle1());
				}
			}
			if (radio.value() === 'Circles with Gravity'){
				for (let i = 0; i < Num; i ++){
					p.push(new Particle2);
				}
			}
			if (radio.value() === 'Squares with Gravity'){
				for (let i = 0; i < Num; i ++){
					p.push(new Particle3);
				}
			}
		}

		//Determining which one is selected 

		else{
			if (radio.value() === 'Circles'){
				for (let i  = 0; i < 500; i++) {
					p.push(new Particle());
				}
			}
			if (radio.value() === 'Squares'){
				for (let i = 0; i < 500; i ++){
					p.push(new Particle1());
				}
			}
			if (radio.value() === 'Circles with Gravity'){
				for (let i = 0; i < 500; i ++){
					p.push(new Particle2);
				}
			}
			if (radio.value() === 'Squares with Gravity'){
				for (let i = 0; i < 500; i ++){
					p.push(new Particle3);
				}
			}
		}

		//Determining which one is selected

	}
}

class Particle {
	//Making First Class
	constructor() {
		this.color = color(slider1.value(), slider2.value(), slider3.value());
		this.x = mouseX;
		this.y = mouseY;
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
	//Making Second Class
	constructor() {
		this.color = color(slider1.value(), slider2.value(), slider3.value());
		this.x = mouseX;
		this.y = mouseY;
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

class Particle2 {
	//Making Third Class
	constructor() {
		this.color = color(slider1.value(), slider2.value(), slider3.value());
		this.x = mouseX;
		this.y = mouseY;
		this.xSpeed = random(-5, 5);
		this.ySpeed = random(-10);

	}

	show() {
		fill(this.color);
		ellipse(this.x, this.y, 5, 6);
	}
	move(){
		this.ySpeed = this.ySpeed + 0.1;
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}

class Particle3 {
	//Making Fourth Class
	constructor() {
		this.color = color(slider1.value(), slider2.value(), slider3.value());
		this.x = mouseX;
		this.y = mouseY;
		this.xSpeed = random(-5, 5);
		this.ySpeed = random(-10);
	}
	show() {
		fill(this.color);
		rect(this.x, this.y, 10, 10);
	}

	move() {
		this.ySpeed = this.ySpeed + 0.1;
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}