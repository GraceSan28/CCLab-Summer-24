// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 3; // Decide the initial number of particles.

let particles = [];

function preload(){
  leafIMG=loadImage("assets/leaf.jpg");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width),0);
  }
}

function draw() {
  background(50);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY,leafimg) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.photo=leafimg;
    this.dia = 30;
    this.xspeed = 0.8;
    this.xdirection = 1;
    // this.yspeed=0.2
    // this.ydirection = -0.1;
    this.xOffset = 0;
  }
  // methods (functions): particle's behaviors
  update() {
    this.y+=this.yspeed;
    this.x+=this.xspeed*this.xdirection
    if(this.x>this.x+10 ||this.x>-10)
  }
  
  
  
  display() {
    // particle's appearance
    push();
    translate(this.x+this.xOffset, this.y);
    
    fill("green");
    noStroke();
    circle(0, 0, this.dia);
    image(this.photo,this.x,this.y);

    pop();
  }
}