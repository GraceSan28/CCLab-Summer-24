let instanceOfTaxi;
let taxi2;

let honk1;
let honk2;
let ambience;

function preload(){
  honk1=loadSound("assets/honk1.mp3")
  honk2=loadSound("assets/honk2.mp3")
  ambience=loadSound("assets/ambience.mp3")
}

function mousePressed(){
  //honk1.play();
  ambience.loop();
}

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvas-parent")

    instanceOfTaxi=new Taxi(150,300,1.5); //create taxi
    console.log(instanceOfTaxi);

    taxi2=new Taxi(250,150,0.5); //create another taxi
  }
  
  function draw() {
    background(10,50,150);
    
    // instanceOfTaxi.spinWheel();
    // instanceOfTaxi.move();
    instanceOfTaxi.update();
    instanceOfTaxi.display();
    instanceOfTaxi.maybeHonk();
    
    // taxi2.spinWheel();
    taxi2.update();
    taxi2.display();
    instanceOfTaxi.maybeHonk();
  }

  class Taxi{ //cookie cutter (foundations of cookie cutter)
    constructor(startX,startY,scaleFactor){
      //all the properties
      //that the instances of this class
      //should have 
      this.x=startX;
      this.y=startY;
      this.s=scaleFactor

      this.speed=random(-2,2);
      this.wheelAngle=45; //taxi's own global variable 
      this.wheelSpeed=2;
    }

    //behaviors of cookie cutter or movements of cookie cutter (verb)
    spinWheel(){ 
      this.wheelAngle+=this.wheelSpeed;
    }
    move(){
      this.x+=this.speed;
    }

    update(){
      //group movement together
      this.spinWheel();
      this.move();
      
      //reappear
      if(this.x>width ){
        this.x=-10;
      }

      if(this.x<-10){
        this.x=width;
      }
    }

    maybeHonk(){
      if (random(0,100)<0.2){
        if(random()<0.5){
          honk1.play();
        }else{
          honk2.play();
        }
        
      }
    }

    display(){//what cookie cutter looks like
      push();
      translate(this.x, this.y);
      scale(this.s);

          noStroke();
          fill(240, 220, 60);

          // base:
          rect(-50, -50, 100, 30);
          // top"
          rect(-25, -70, 50, 20);
          // wheel 1:
          this.drawWheel(-30, -15);
          // wheel 2:
          this.drawWheel( 30, -15);


          // just to see origin 
          // of translation matrix:
          fill("red");
          circle(0, 0, 5); 


      pop();
    }
    drawWheel(wheelx, wheely){
      push();
      translate(wheelx, wheely);
      rotate(radians(this.wheelAngle));

          noStroke();
          fill(0);
          // circle(0,0,30);
          ellipse(0,0,30, 27);

      pop();
  }
  }

