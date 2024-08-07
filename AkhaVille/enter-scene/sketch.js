let bgm;

let restaurant;
let restaurantIMG;

let yaxm;
let yaxmIMG;
let yaxmText;
let yaxmTextIMG;


let tree;
let treeIMG;

let roadIMG;
let road;
let road2;
let road3;
let road4;
let road5;

let roads = [];
let numRoad = 1;

let fruitIMG;
let fruit1;
let fruit2;
let fruit3;
let fruitbasket;
let fruitbasketIMG;

let bushIMG;
let bush1;
let bush2;
let bush3;
let bush4;

let flowerIMG;
let flower1;
let flower2;
let flower3;
let flower4;
let flower5;
let flower6;
let flower7;
let flower8;

let text2;
let text2IMG;

let text3;
let text3IMG;

let text4;
let text4IMG;

let text5;
let text5IMG;

let text6;
let text6IMG;

let text7;
let text7IMG;

let text8;
let text8IMG;

function preload() {
  bgm = loadSound("assets/website_bgm.mp3");

  roadIMG = loadImage("assets/cobblestone.PNG");
  restaurantIMG = loadImage("assets/restaurant-exterior.PNG");
  treeIMG = loadImage("assets/tree.PNG");
  fruitIMG = loadImage("assets/fruit.PNG");
  fruitbasketIMG = loadImage("assets/fruitbasket.PNG");
  bushIMG = loadImage("assets/bush.PNG");
  flowerIMG = loadImage("assets/flower.PNG");

  flowerSound1 = loadSound("assets/Hello.mp3");
  flowerSound2 = loadSound("assets/How are you.mp3");
  flowerSound3 = loadSound("assets/What are  you doing.mp3");
  flowerSound4 = loadSound("assets/letseat.mp3");
  flowerSound5 = loadSound("assets/Where are you.mp3");
  flowerSound6 = loadSound("assets/Miss you.mp3");
  flowerSound7 = loadSound("assets/I love you.mp3")
  flowerSound8 = loadSound("assets/What’s your number.mp3")

  text1IMG = loadImage("assets/hellotext.PNG");
  text2IMG = loadImage("assets/howareyoutext.PNG");
  text3IMG = loadImage("assets/whatareyoudoingtext.PNG");
  text4IMG = loadImage("assets/letseattext.PNG");
  text5IMG = loadImage("assets/whereareyoutext.PNG");
  text6IMG = loadImage("assets/missyoutext.PNG");
  text7IMG = loadImage("assets/iloveyoutext.PNG");
  text8IMG = loadImage("assets/numbertext.PNG");

  yaxmIMG = loadImage("assets/character.PNG");
  yaxmTextIMG = loadImage("assets/yaxmtextoutside.PNG")
  fruitSound = loadSound("assets/FruitPluck.mp3")
}



function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("canvas-parent");

  backgroundMusic();

  for (let i = 0; i < numRoad; i++) {
    let oneRoad = new Road(width / 4, height / 2, roadIMG);
    roads.push(oneRoad);
  }

  road2 = new Road(width / 4, height / 2 + 100, roadIMG);
  road3 = new Road(500, 685, roadIMG);
  road4 = new Road(550, height / 2 + 300, roadIMG);
  road5 = new Road(600, height / 2 + 400, roadIMG);

  restaurant = new Restaurant(width / 6, -20, restaurantIMG);

  tree = new Tree(1150, 50, treeIMG);

  fruit1 = new Fruit(1200, 175, fruitIMG);
  fruit2 = new Fruit(1250, 250, fruitIMG);
  fruit3 = new Fruit(1300, 175, fruitIMG);
  fruitbasket = new Fruitbasket(1150, 350, fruitbasketIMG);

  bush1 = new Bush(40, 500, bushIMG);
  bush2 = new Bush(40, 700, bushIMG);
  bush3 = new Bush(750, 500, bushIMG);
  bush4 = new Bush(900, 700, bushIMG);

  flower1 = new Flower(155, 600, flowerIMG);
  flower2 = new Flower(270, 590, flowerIMG);
  flower3 = new Flower(170, 780, flowerIMG);
  flower4 = new Flower(260, 800, flowerIMG);
  flower5 = new Flower(875, 590, flowerIMG);
  flower6 = new Flower(980, 600, flowerIMG);
  flower7 = new Flower(1025, 800, flowerIMG);
  flower8 = new Flower(1125, 775, flowerIMG);

  text1 = new Text(80, 450, text1IMG);
  text2 = new Text(220, 430, text2IMG);
  text3 = new Text(70, 650, text3IMG);
  text4 = new Text(200, 650, text4IMG);
  text5 = new Text(800, 430, text5IMG);
  text6 = new Text(920, 450, text6IMG);
  text7 = new Text(930, 660, text7IMG);
  text8 = new Text(1050, 620, text8IMG);

  yaxm = new YaXm(500, 760, yaxmIMG);
  yaxmText = new YaXmText(610, 600, yaxmTextIMG);
}

function backgroundMusic() {
  bgm.play();
  bgm.loop();
  bgm.setVolume(0.1);
  userStartAudio();
}

function draw() {
  clear(); // delete background
  for (let i = 0; i < roads.length; i++) {
    roads[i].display();
  }
  road2.display();
  road3.display();
  road4.display();
  road5.display();

  restaurant.display();



  tree.display();
  tree.update();

  fruitbasket.display();

  fruit1.update();
  fruit1.display();
  fruit2.update();
  fruit2.display();
  fruit3.update();
  fruit3.display();



  bush1.display();
  bush2.display();
  bush3.display();
  bush4.display();

  flower1.update();
  flower1.display();

  flower2.update();
  flower2.display();

  flower3.update();
  flower3.display();

  flower4.update();
  flower4.display();

  flower5.update();
  flower5.display();

  flower6.update();
  flower6.display();

  flower7.update();
  flower7.display();

  flower8.update();
  flower8.display();

  text1.display();
  text2.display();
  text3.display();
  text4.display();
  text5.display();
  text6.display();
  text7.display();
  text8.display();

  yaxm.display();
  yaxmText.display();
}

class YaXm {
  constructor(yaxmX, yaxmY, yaxmIMG) {
    this.x = yaxmX;
    this.y = yaxmY;
    this.photo = yaxmIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    image(this.photo, 0, 0, imgW * 0.8, imgH * 0.8);
    pop();
  }
}

class YaXmText {
  constructor(textX, textY, textIMG) {
    this.x = textX;
    this.y = textY;
    this.photo = textIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    image(this.photo, 0, 0, imgW * 0.085, imgH * 0.085);
    pop();
  }
}
class Road {
  constructor(roadX, roadY, roadIMG) {
    this.x = roadX;
    this.y = roadY;
    this.photo = roadIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.x;
    let imgH = this.y;
    scale(0.07);
    image(this.photo, -imgW / 2, -imgH + 430);
    pop();
  }
}

class Restaurant {
  constructor(restaurantX, restaurantY, restaurantIMG) {
    this.x = restaurantX;
    this.y = restaurantY;
    this.photo = restaurantIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.x;
    let imgH = this.y;
    scale(0.7);
    image(this.photo, -imgW / 2, -imgH + 15);
    pop();
  }
}

class Tree {
  constructor(treeX, treeY, treeIMG) {
    this.x = treeX;
    this.y = treeY;
    this.photo = treeIMG;
  }

  update() {
    // this.y++
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;
    scale(0.9);
    image(this.photo, -50, 0, imgW, imgH);
    // fill("red");
    // circle(0, 0, 10);
    pop();
  }
}

class Fruit {
  constructor(fruitX, fruitY, fruitIMG) {
    this.x = fruitX;
    this.y = fruitY;
    this.photo = fruitIMG;
    this.size = 0.05 * fruitIMG.width;
    this.isFalling = false;
    this.fallSpeed = 5;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;
    scale(0.05);
    image(this.photo, -imgW / 2, -imgH / 2, imgW, imgH);

    // fill("blue");
    // circle(0, 0, 100);
    pop();
  }

  update() {
    if (this.isFalling) {
      this.y += this.fallSpeed;
      if (this.y >= 400) {
        this.y = 400; //yLoc of where it stops 
        this.isFalling = false;
      }
    }

    //   if(this.isDragged==true){
    //     this.x=mouseX;
    //     this.y=mouseY;
    //   }
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.size / 2; //click detection
  }
  // checkIfPressed() {
  //   if (mouseX > 1178 && mouseX < 1217 &&
  //     mouseY > 380 && mouseY < 422 ) {
  //     this.isDragged = true;
  //   }
  //}
}

class Fruitbasket {
  constructor(basketX, basketY, fruitbasketIMG) {
    this.x = basketX;
    this.y = basketY;
    this.photo = fruitbasketIMG;
  }
  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;
    scale(1.2)
    image(this.photo, 0, 0, imgW * 0.086, imgH * 0.05);
    pop();
  }
}

class Bush {
  constructor(bushX, bushY, bushIMG) {
    this.x = bushX;
    this.y = bushY;
    this.photo = bushIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;
    scale(1.2)
    image(this.photo, 0, 0, imgW, imgH);
    pop();
  }
}

class Flower {
  constructor(flowerX, flowerY, flowerIMG) {
    this.x = flowerX;
    this.y = flowerY;
    this.photo = flowerIMG;
    //this.sound = flowerSound;
    this.angle = 30;
    this.rotateSpeed = 0.5;
  }
  update() {
    this.flowerTilt();

    if (this.angle >= 45) {
      this.rotateSpeed -= 0.5
    }

    if (this.angle <= 25) {
      this.rotateSpeed += 0.5
    }
  }

  flowerTilt() {
    this.angle += this.rotateSpeed
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    rotate(radians(this.angle));
    fill(255, 0);
    noStroke();
    circle(0, 0, 50) //check if within dist of click 
    scale(0.5);

    image(this.photo, -55, -50, imgW / 10, imgH / 10)
    // fill(255);
    // circle(0,0,5);
    pop();
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < 25; // because circle dia is 50
  }

  playSound() {
    //! is so the sounds don't overlap and only 1 sound plays
    if (this.sound && !this.sound.isPlaying()) {
      this.sound.play();
    }
  }
}

class Text {
  constructor(textX, textY, textIMG) {
    this.x = textX;
    this.y = textY;
    this.photo = textIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    image(this.photo, 0, 0, imgW / 17, imgH / 17);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  console.log("pressed");
  console.log(mouseX, mouseY);

  if (fruit1.isClicked(mouseX, mouseY)) {
    fruit1.isFalling = true;
    fruitSound.play();
  }
  if (fruit2.isClicked(mouseX, mouseY)) {
    fruit2.isFalling = true;
    fruitSound.play();
  }

  if (fruit3.isClicked(mouseX, mouseY)) {
    fruit3.isFalling = true;
    fruitSound.play();
  }

  // fruit1.checkIfPressed();
  // fruit2.checkIfPressed();
  // fruit3.checkIfPressed();

  if (flower1.isClicked(mouseX, mouseY)) {
    console.log("wefonew")
    flowerSound1.play();
    //text1.display();
  }
  if (flower2.isClicked(mouseX, mouseY)) {
    flowerSound2.play();
    // text2.display();
  }
  if (flower3.isClicked(mouseX, mouseY)) {
    flowerSound3.play();
    //text3.display();
  }
  if (flower4.isClicked(mouseX, mouseY)) {
    console.log("wefonew")
    flowerSound4.play();
    //text4.display();
  }
  if (flower5.isClicked(mouseX, mouseY)) {
    flowerSound5.play();
    // text5.display();
  }
  if (flower6.isClicked(mouseX, mouseY)) {
    flowerSound6.play();
    //  text6.display();
  }
  if (flower7.isClicked(mouseX, mouseY)) {
    flowerSound7.play();
    //text7.display();
  }
  if (flower8.isClicked(mouseX, mouseY)) {
    flowerSound8.play();
    // text8.display();
  }
}
// function mouseReleased() {
//   console.log("released")

//   fruit1.isDragged=false;
//   fruit2.isDragged=false;
//   fruit3.isDragged=false;
// }