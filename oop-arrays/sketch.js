let cow1;
let cowIMG; 

let cows=[];
let numCows=20;

function preload(){
  cowIMG=loadImage("assets/cow-poster.png");
}
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent")

    //cow1= new Cow(200, 400,cowIMG); //instantiate the cow has to be equal

    //make initial COWS and put it into cows array (what we will copy)
    //use numCOWS in setup because it's first one 
    for(let i=0;i<numCows;i++){
      let oneCow=new Cow(random(width),random(height),cowIMG);
      cows.push(oneCow);
    }
  }
  
  function draw() {
    background(220,150,150);
    fill(255);

    //cow1.display(); //display the cow 
    //cow1.update();

    //DO STUFF FOR EACH COW >> loop over the cows array 
    for(let i=0; i<cows.length;i++){
      cows[i].display();
      cows[i].update();
    }
  }

  class Cow{
    constructor(startX,startY,cowimg){
      this.x=startX;
      this.y=startY;
      this.photo=cowimg
      this.scaleFactor=random(0.4,0.5);
      
      this.xSpeed = random(1,3);
      this.ySpeed = random(1,3);
    }

    update(){
      this.x +=this.xSpeed;
      this.y +=this.ySpeed;

      if(this.x >width){
        this.x=0;
      }
      if(this.y>height){
        this.y=0;
      }
    }

    display(){
      push();
      translate(this.x,this.y);
      scale(this.scaleFactor);

      fill(255);
      //rect(0,0,50,50);

      let imgWidth=this.photo.width;
      let imgHeight=this.photo.height;
      image(this.photo,-imgWidth/2+60,-imgHeight+90);

      fill("red");
      circle(0,0,5);


      pop();
    }
  }