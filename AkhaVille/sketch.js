let bgm;

let introText;
let introTextIMG

function preload(){
  bgm=loadSound("assets/introBGM.mp3");
  introTextIMG=loadImage("assets/akhaIntroText.PNG");
}

function setup() {
   let cnv = createCanvas(windowWidth, windowHeight);
   cnv.parent("canvas-parent")
    console.log(bgm);

    backgroundMusic();

    introText=new IntroText(810,100,introTextIMG);
  }

function backgroundMusic(){
  bgm.play();
  bgm.loop();
  bgm.setVolume(0.1);
  userStartAudio();
}
  
  function draw() {
    clear();
    background(0,0);

    introText.display();
  }

  class IntroText{
    constructor(introX,introY,introIMG){
      this.x=introX;
      this.y=introY;
      this.photo=introIMG;
    }
    display() {
      push();
      translate(this.x,this.y);
      let imgW = this.photo.width;
      let imgH = this.photo.height;
  
      image(this.photo, 0, 0, imgW/2.5,imgH/2.5);
  
      pop();
    }
  }

  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  }