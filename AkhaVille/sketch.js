let bgm;

function preload(){
  bgm=loadSound("assets/website_bgm.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(bgm);

    backgroundMusic();
  }

function backgroundMusic(){
  bgm.play();
  bgm.loop();
  bgm.setVolume(0.3);
  userStartAudio();
}
  
  function draw() {

  }

  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  }