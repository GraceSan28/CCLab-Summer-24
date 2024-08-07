/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new GraceDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class GraceDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.GlassHeadAngle=30;
    this.tiltSpeed=0.35;
    
    this.x1=-28
    this.y1=-30
    this.x2=0
    this.y2=-1
    this.x3=13.5
    this.y3=-15
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.headTilt();
    
  }
  headTilt(){
    this.GlassHeadAngle+=this.tiltSpeed

    if(this.GlassHeadAngle>=20){
      this.tiltSpeed-=0.35;
      this.x3=28;
      this.y3=-30;
      this.x1=-13.5;
      this.y1=-15;
    }

    if(this.GlassHeadAngle<15 && this.GlassHeadAngle>0){
      this.x3=24.5;
      this.y3=-26;
      this.x1=-17.25;
      this.y1=-18.5;
    }

    if(this.GlassHeadAngle<2&&this.GlassHeadAngle>-0.2){
      this.x1=-21;
      this.y1=-22;
      this.x3= 21;
      this.y3=-22;
    }

    if(this.GlassHeadAngle>-15 && this.GlassHeadAngle<0){
      this.x1=-24.5;
      this.y1=-26;
      this.x3=17.25;
      this.y3=-18.5;
    }
    if(this.GlassHeadAngle<=-20){
      this.tiltSpeed+=0.3;
      this.x1=-28;
      this.y1=-30;
      this.x3=13.5;
      this.y3=-15;
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    this.drawGlassHead();

    //glassStem
    stroke(130, 250, 222,150);
    fill(203, 255, 243);
    quad(-2,0,2,0,2,60,-2,60);

    //glassbase
    stroke(130, 250, 222,150);
    fill(203, 255, 243);
    quad(-2,60,2,60,20,62,-20,62);

    this.drawOlive();

    

    // ******** //
    // ⬇️ draw your dancer from here ⬇️






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }

  drawGlassHead(){
    push();
    rotate(radians(this.GlassHeadAngle));
    //glassbody
    fill(203, 255, 243);
    stroke(130, 250, 222,150);
    quad(-40,-40,40,-40,2,0,-2,0);

    //glassinnerbody
    noStroke();
    fill(130, 250, 222, 200);
    quad(-36,-38,36,-38,0,-1,0,-1);

    // //martiniliquid
    // fill(238, 255, 131,210);
    // triangle(-28,-30,0,-1,13.5,-15);
    pop();

    this.drawLiquid();
    
  }

  drawLiquid(){ //added this not sure 
    push();
    //translate(0,0); //added this not sure 
    rotate(radians(this.GlassHeadAngle));

    //martiniliquid
    fill(238, 255, 131,210);
    stroke(238, 255, 131);
  
    triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
    pop();

  }

  drawOlive(){
    push();
    stroke(219, 244, 152);
    fill(219, 244, 152);
    ellipse(this.x,this.y,30,20);
    fill(255,0,0);
    ellipse(this.x+10,this.y,10,5);

  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/