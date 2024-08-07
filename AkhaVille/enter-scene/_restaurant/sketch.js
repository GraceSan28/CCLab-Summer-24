let floorplanIMG;
let floorplan

let counterIMG;
let counter;

let waiterText;
let waiterTextIMG;

let tableIMG;
let table1;
let table2;
let table3;
let table4;

let chairIMG;
let chair1;
let chair2;
let chair3;
let chair4;
let chair5;
let chair6;
let chair7;
let chair8;

let menuStandIMG;
let menuStand;

let menuList; //replace with menu zoom in png
let menuListIMG;
let menuListStay = false; //to keep the menu in frame

let dish1Stay = false;
let dish1;
let dish1IMG;

let dish2Stay = false;
let dish2;
let dish2IMG;

let dish3Stay = false;
let dish3;
let dish3IMG;

let dish4Stay = false;
let dish4;
let dish4IMG;

let dish5Stay = false;
let dish5;
let dish5IMG;

let grandma;
let grandmaIMG;

function preload() {
  floorplanIMG = loadImage("assets/floorplan.PNG");
  counterIMG = loadImage("assets/order-counter.PNG");
  tableIMG = loadImage("assets/table.PNG");
  chairIMG = loadImage("assets/chair.PNG");
  menuStandIMG = loadImage("assets/menu-stand.PNG")
  menuListIMG = loadImage("assets/menu-list.PNG")

  dish1IMG = loadImage("assets/dish1.PNG")
  dish2IMG = loadImage("assets/dish2.PNG")
  dish3IMG = loadImage("assets/dish3.JPG")
  dish4IMG = loadImage("assets/dish4.PNG")
  dish5IMG = loadImage("assets/dish5.PNG")

  dish1Sound = loadSound("assets/Fish.mp3");
  dish2Sound = loadSound("assets/Liver.mp3");
  dish3Sound = loadSound("assets/Pork.mp3");
  dish4Sound = loadSound("assets/Chilli.mp3");
  dish5Sound = loadSound("assets/Everything.mp3");

  grandmaIMG = loadImage("assets/grandma.PNG")

  waiterSound = loadSound("assets/Welcome what eat.mp3")

  waiterTextIMG = loadImage("assets/waiterText.PNG")
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("canvas-parent")

  floorplan = new FloorPlan(width / 2, height / 2, floorplanIMG);

  counter = new Counter(775, 80, counterIMG);
  waiterText = new Text(1100, 25, waiterTextIMG);

  table1 = new Table(300, 225, tableIMG);
  table2 = new Table(300, 625, tableIMG);
  table3 = new Table(1400, 225, tableIMG);
  table4 = new Table(1400, 625, tableIMG);

  chair1 = new Chair(200, 225, chairIMG);
  chair2 = new Chair(625, 400, chairIMG);
  chair3 = new Chair(200, 800, chairIMG);
  chair4 = new Chair(630, 600, chairIMG);
  chair5 = new Chair(1300, 400, chairIMG);
  chair6 = new Chair(1750, 225, chairIMG);
  chair7 = new Chair(1300, 600, chairIMG);
  chair8 = new Chair(1750, 800, chairIMG);

  menuStand = new MenuStand(1100, 250, menuStandIMG);

  menuList = new MenuList(1350, 100, menuListIMG);

  dish1 = new Dish(1625, 200, dish1IMG);
  dish2 = new Dish(1632, 180, dish2IMG);
  dish3 = new Dish(1622, 220, dish3IMG);
  dish4 = new Dish(1620, 200, dish4IMG);
  dish5 = new Dish(1630, 200, dish5IMG);
}

function draw() {
  clear(); // delete background
  background(200, 100, 100);

  floorplan.display();

  counter.display();
  waiterText.display();

  table1.display();
  table2.display();
  table3.display();
  table4.display();

  chair1.display();
  chair2.display();
  chair3.display();
  chair4.display();
  chair5.display();
  chair6.display();
  chair7.display();
  chair8.display();

  menuStand.display();

  //waiter interaction (talks)
  if (mouseIsPressed) {
    if (mouseX > 970 && mouseX < 1110 &&
      mouseY > 97 && mouseY < 255) {
      push();
      if (waiterSound.isPlaying() == false) { // if its not playing then play it on mousePressed
        waiterSound.play();
        pop();
      }
    }
  }

  // if true then keep menu in frame
  if (menuListStay) {
    push();
    menuList.display();
    pop();
  }
  //where you call menu to be true to stay 
  if (mouseIsPressed) {
    if (mouseX > 1120 && mouseX < 1260 &&
      mouseY > 280 && mouseY < 366) {
      push();
      menuListStay = true;
      pop();
    }
    //back button
    else if (mouseX > 1380 && mouseX < 1462 &&
      mouseY < 470 && mouseY > 415) {
      push();
      menuListStay = false;
      console.log("false")
      pop();
    }
  }

  if (dish1Stay) {
    push();
    dish1.display();
    pop();
  } else if (dish2Stay) {
    push();
    dish2.display();
    pop();
  } else if (dish3Stay) {
    push();
    dish3.display();
    pop();
  } else if (dish4Stay) {
    push();
    dish4.display();
    pop();
  } else if (dish5Stay) {
    push();
    dish5.display();
    pop();
  }

  //dishes appear
  if (mouseIsPressed) {
    if (mouseX > 1380 && mouseX < 1590 &&
      mouseY > 200 && mouseY < 226) {
      push();
      dish1Stay = true;
      if (dish1Sound.isPlaying() == false) {
        dish1Sound.play();
      }
      pop();
    } else if (mouseX > 1380 && mouseX < 1590 &&
      mouseY > 252 && mouseY < 276) {
      push();
      dish1Stay = false;
      dish2Stay = true;
      if (dish2Sound.isPlaying() == false) {
        dish2Sound.play();
      }
      pop();
    } else if (mouseX > 1380 && mouseX < 1590 &&
      mouseY > 303 && mouseY < 325) {
      push();
      dish2Stay = false;
      dish3Stay = true;
      if (dish3Sound.isPlaying() == false) {
        dish3Sound.play();
      }
      pop();
    } else if (mouseX > 1380 && mouseX < 1590 &&
      mouseY > 345 && mouseY < 371) {
      push();
      dish3Stay = false;
      dish4Stay = true;
      if (dish4Sound.isPlaying() == false) {
        dish4Sound.play();
      }
      pop();
    } else if (mouseX > 1380 && mouseX < 1590 &&
      mouseY > 392 && mouseY < 410) {
      push();
      dish4Stay = false;
      dish5Stay = true;
      if (dish5Sound.isPlaying() == false) {
        dish5Sound.play();
      }
      pop();
    } else if (mouseX > 1380 && mouseX < 1462 &&
      mouseY < 470 && mouseY > 415) {
      push();
      dish1Stay = false;
      dish2Stay = false;
      dish3Stay = false;
      dish4Stay = false;
      dish5Stay = false;
      console.log("false")
      pop();
    }

  }
}

class FloorPlan {
  constructor(floorplanX, floorplanY, floorplanIMG) {
    this.x = floorplanX;
    this.y = floorplanY;
    this.photo = floorplanIMG;
  }

  display() {
    push();
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    image(this.photo, 0, 0, imgW * 1.11, imgH);

    pop();
  }
}

class Counter {
  constructor(counterX, counterY, counterIMG) {
    this.x = counterX;
    this.y = counterY;
    this.photo = counterIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    // fill('red')
    // circle(0,0,30);

    //check if clicking in the rect
    if (this.isDragged == true) {
      fill("red")
    } else {
      fill("white")
    }
    // rect(195, 20, 140, 160);
    image(this.photo, 0, 0, imgW, imgH);
    pop();
  }

  // isClicked(mx,my){
  //   let d=dist(mx,my,this.x,this.y);
  //   return d<
  // }

  checkIfPressed() {
    if (mouseX > this.x + 195 &&
      mouseX < this.x + 335 &&
      mouseY > this.y + 20 &&
      mouseY < this.y + 180
    ) {
      this.isDragged = true;
    }
  }

  // playSound() {
  //   if (this.sound && !this.sound.isPlaying()) {
  //     this.sound.play();
  //   }
  // }
}

class Table {
  constructor(tableX, tableY, tableIMG) {
    this.x = tableX;
    this.y = tableY;
    this.photo = tableIMG;
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


class Chair {
  constructor(chairX, chairY, chairIMG) {
    this.x = chairX;
    this.y = chairY;
    this.photo = chairIMG;
  }

  update(){
    if(this.isDragged==true){
      this.x=mouseX;
      this.y=mouseY;
    }
  }

  display() {
    push();
    translate(this.x, this.y);



    if (this.isDragged == true) {
      fill("red")
    } else {
      fill("white")
    }
    rect(0, 0, 110, 110);

    let imgW = this.photo.width;
    let imgH = this.photo.height;

    image(this.photo, 0, 0, imgW, imgH)

    fill("blue");
    circle(0, 0, 5);
    pop();
  }

  checkIfPressed() {
    if (mouseX > this.x && mouseX < this.x + 110 &&
      mouseY > this.y && mouseY < this.y + 110
    ) {
      this.isDragged = true;
    }
  }
}

class MenuStand {
  constructor(menustandX, menustandY, menuStandIMG) {
    this.x = menustandX;
    this.y = menustandY;
    this.photo = menuStandIMG
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    //  fill('red')
    // circle(0,0,30);

    //check if clicking in the rect
    if (this.isDragged == true) {
      fill("red")
    } else {
      fill("white")
    }
    rect(22, 25, 140, 90);

    image(this.photo, 0, 0, imgW * 0.8, imgH * 1)
    pop();
  }

  checkIfPressed() { //deal later
    if (mouseX > this.x + 22 && //+xposition
      mouseX < this.x + 162 && //+xposition+width
      mouseY > this.y + 25 && //+yposition
      mouseY < this.y + 115 //+yposition+height
    ) {
      this.isDragged = true;
    }
  }
}

class MenuList {
  constructor(menuListX, menuListY, menuListIMG) {
    this.x = menuListX;
    this.y = menuListY;
    this.photo = menuListIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    // fill('red')
    // circle(0, 0, 10);

    // if (this.isDragged == true) {
    //   fill("red")
    // } else {
    //   fill("white")
    // }

    // fill(255,100)
    // rect(195, 20, 140, 160);

    image(this.photo, 0, 0, imgW / 4, imgH / 4);
    pop();
  }
}

class Dish {
  constructor(dishX, dishY, dishPhoto) {
    this.x = dishX;
    this.y = dishY;
    this.photo = dishPhoto;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    image(this.photo, 0, 0, imgW / 5.5, imgH / 5.5);
    pop();
  }
}

class Text {
  constructor(textX, textY, waiterTextIMG) {
    this.x = textX;
    this.y = textY;
    this.photo = waiterTextIMG;
  }

  display() {
    push();
    translate(this.x, this.y);
    let imgW = this.photo.width;
    let imgH = this.photo.height;

    image(this.photo, 0, 0, imgW / 9.5, imgH / 9.5);
    pop();
  }
}

function mousePressed() {
  console.log("pressed")
  console.log(mouseX, mouseY);
 chair1.checkIfPressed();
 chair2.checkIfPressed();
 chair3.checkIfPressed();
 chair4.checkIfPressed();
 chair5.checkIfPressed();
 chair6.checkIfPressed();
 chair7.checkIfPressed();
 chair8.checkIfPressed();

}

function mouseReleased() {
  console.log("released")
  counter.isDragged = false; //for waiter rect
  chair1.isDragged=false; 
  chair2.isDragged=false; 
  chair3.isDragged=false; 
  chair4.isDragged=false; 
  chair5.isDragged=false; 
  chair6.isDragged=false; 
  chair7.isDragged=false; 
  chair8.isDragged=false; 
}


