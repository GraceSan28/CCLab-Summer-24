let sunDia = 90;

//seafoam
let xBubbles = [];
let yBubbles = [];
let iBubblesNum = 300;

//cloud
let cloud1X = 200;
let cloud1Y = 80;
let cloud1bubblesX = [];
let cloud1bubblesY = [];

//prey
let xPreyArray = [];
let yPreyArray = [];
let diaPreyArray = [];

//boat
let xBoat = 100;
let yBoat = 200;

//munchkin
let munchkinLocX = 400;
let munchkinLocY = 350;
let munchkinDia = 40;

//fish
let sinInput = 0;
let fishx = [];
let fishy = [];
let fishSpeed = [];
let ampArray = [];
let fishColor = [];

//crab
let crabx = 100;
let crabspeed = 1;
let direction = 1;

//plant
let plantX = [];
let plantY = 400;

//--------------------------------------------------------------------------------------------------
function setup() {
  createCanvas(800, 500);

  let cnv = createCanvas(800,500);
  cnv.parent("p5-canvas-container");
  
  background(194, 255, 246);



  //cloud
  for (let i = 0; i < 150; i++) {
    let randomX = random(cloud1X - 150, cloud1X + 400);
    let randomY = random(cloud1Y - 40, cloud1Y + 40);
    cloud1bubblesX.push(randomX);
    cloud1bubblesY.push(randomY);
  }

  //seafoam
  for (let i = 0; i < iBubblesNum; i++) {
    xBubbles[i] = random(width);
    yBubbles[i] = random(250, 260);
  }

  //plant
  for (let i = 0; i <= 12; i++) {
    let plantXrandom = random(0, width);
    plantX.push(plantXrandom);
  }
  //fish
  for (let i = 0; i < 4; i++) {
    //change no.3 if want more fish
    fishx.push(0); //0 because init value doesnt matter will randomize anyways
    fishy.push(0);
    fishSpeed.push(0);
    ampArray.push(0);
    fishColor.push("black");

    randomizeFish(i);
  }
}

function randomizeFish(index) {
  //[index] because we are only randomizing the fish with that index
  let side = random([1, -1]); //1=left, -1=right
  let x = random(-200, -100); //starting points if on the left
  if (side == -1) {
    //right
    x = random(width + 100, width + 200); //right starting point
  }
  let y = random(330, 420); //starting y coordinate everytime it comes back from frame
  let amp = random(2, 5); //oscillation height
  let speed = random(1, 4) * side;
  let newColor = random(["red", "yellow", "green"]);

  fishx[index] = x;
  fishy[index] = y;
  fishSpeed[index] = speed;
  ampArray[index] = amp;
  fishColor[index] = newColor;
}

//------------------------------------------------
//------------------------------------------------
function draw() {
  background(194, 255, 246);

  //lighter sky background////////

  rect(0, 0, 800, 250);
  if (fishx > width) {
    fill(255, 255, 255, 90);
  }

  //sun//////////////////////////
  for (let sunDia = 30; sunDia <= 90; sunDia += 2) {
    noStroke();
    fill(250, 161, 30, 20);
    circle(700, 80, sunDia);
  }

  //draw cloud////////////////////
  fill(255, 120);

  for (let i = 0; i < cloud1bubblesX.length; i++) {
    x = cloud1bubblesX[i];
    y = cloud1bubblesY[i];
    circle(x, y, 40);
  }

  drawPlant();

  //boat//////////////////////////
  drawBoat(xBoat, yBoat);

  if (keyIsPressed == true) {
    if (key == "ArrowRight") {
      xBoat = xBoat + 1;
    } else if (key == "ArrowLeft") {
      xBoat = xBoat - 1;
    }
  }

  //bubbles//////////////////////
  for (let i = 0; i < xBubbles.length; i++) {
    xBubbles[i] += random(-0.3, 0.3);
    //yBubbles[i] += random(-0.3, 0.3);

    let x = xBubbles[i];
    let y = yBubbles[i];
    fill(random(140, 160), random(235, 255), random(220, 250));
    circle(x, y, random(10, 30));
    fill(255, 95);
    circle(x, y, random(10, 20));
  }

  //prey/////////////////////////
  push();
  for (let i = 0; i < xPreyArray.length; i++) {
    let foodx = xPreyArray[i];
    let y = yPreyArray[i];
    let r = diaPreyArray[i];
    fill(255, 182, 193);
    text("nom noms", foodx + 6, y);
    circle(foodx, y, r);
    if (yPreyArray[i] < 255) {
      yPreyArray[i] += 1.9;
    } else {
      yPreyArray[i] += 0.85;
    }
  }
  pop();

  //Munchkin/////////////////
  drawMunchkin();
  munchkinDia -= 0.015;
  if (munchkinDia <= 20) {
    munchkinDia = 20;
  }
  if (munchkinDia >= 40) {
    drawMunchkinSmile();
  }
  if (munchkinDia >= 55) {
    drawMunchkinFinal();
    munchkinDia = 60; // if want to stop evolving at final form
  }

  //console.log(munchkinDia) //---> check diameter of munchkin
  //gets smaller as it doesnt eat
  //but never smaller than a certain size
  //but also doesn't chase food if it gets a bigger size
  if (xPreyArray.length > 0) {
    // move mucnhkin to feshest food
    //console.log(xPreyArray, munchkinLocX);
    munchkinLocX = lerp(munchkinLocX, xPreyArray[xPreyArray.length - 1], 0.02);
    munchkinLocY = lerp(munchkinLocY, yPreyArray[yPreyArray.length - 1], 0.02);
    // make sure munchkin stays in water
    if (munchkinLocY > height - 30) {
      munchkinLocY = height - 30; //take into account munchkin dia
    } else if (munchkinLocY < 295) {
      munchkinLocY = 295;
    }

    // handle EATING
    //get distance between munchkin and latest food
    let d = dist(
      munchkinLocX,
      munchkinLocY,
      xPreyArray[xPreyArray.length - 1],
      yPreyArray[yPreyArray.length - 1]
    );

    //if distance is smaller than both radius combined

    if (d < munchkinDia / 2 + diaPreyArray[diaPreyArray.length - 1] / 2) {
      //then the latest food should be deleted
      //console.log("collision")
      xPreyArray.splice(xPreyArray.length - 1, 1); //splice=eats the food
      yPreyArray.splice(yPreyArray.length - 1, 1);
      diaPreyArray.splice(diaPreyArray.length - 1, 1);
      munchkinDia += 2;
    }

    // handle food that was too fast for munchkin
    //
    // check if latest food is out of frame (too low)
    if (yPreyArray[yPreyArray.length - 1] > height + 20) {
      xPreyArray.splice(xPreyArray.length - 1, 1);
      yPreyArray.splice(yPreyArray.length - 1, 1);
      diaPreyArray.splice(diaPreyArray.length - 1, 1);
    }
    // if so, last food should be deleted
  }

  //fish//////////////////

  for (let i = 0; i < fishx.length; i++) {
    push();
    let sinInputRad = radians(sinInput);
    let sinValue = sin(sinInput);

    noStroke();
    translate(fishx[i], fishy[i]); //translate first for scale
    if (fishSpeed[i] < 0) {
      //fish speed less than zero means its moving left from right (-1)
      scale(-1, 1); //flips the fish on the vertical axis so it looks in the right direction
    }
    drawFish(0, 0, fishColor[i]);

    sinInput = sinInput + 0.075; //changing the x of the sin function
    fishx[i] = fishx[i] + fishSpeed[i];
    fishy[i] = fishy[i] + sinValue * ampArray[i];

    if (fishSpeed[i] < 0 && fishx[i] < -50) {
      //start at right
      randomizeFish(i);
    } else if (fishSpeed[i] > 0 && fishx[i] > width + 50) {
      //start at left
      randomizeFish(i);
    }

    pop();
  }

  //CRAB//////////////////////////
  push();
  drawCrab(crabx, height - 15);
  drawCrab(crabx + 450, height - 15);

  crabx += crabspeed * direction;
  if (crabx >= 200 || crabx <= 100) {
    direction *= -1;

    pop();
  }
  //instructions
  push();
  if (frameCount < 300) {
    fill(213, 254, 176); //green
    rect(280, 60, 290, 120, 40);
    fill(252, 254, 176); //yellow
    rect(300, 70, 250, 100, 20);
    fill(0);
    text("You've discovered SeaMunchkin!", 335, 100);
    text("Feed it and see what happens!", 335, 150);
  }
  pop();
}
//------------------------------------------------------------------------------------------------------
//if dia<200 then draw the blob above
//if dia>200 then draw final form
function drawMunchkin() {
  push();
  translate(munchkinLocX, munchkinLocY);
  fill(255, 182, 193, 200); // Light pink color
  ellipse(0, 0, munchkinDia, munchkinDia);
  fill(0);
  circle(-8, -5, 4); //left eye
  circle(8, -5, 4); //right eye
  strokeWeight(2);
  stroke(0);
  line(-5, 5, 5, 5);
  pop();
}
function drawMunchkinSmile() {
  push();
  translate(munchkinLocX, munchkinLocY);
  fill(254, 176, 176, 200); // Light pink color
  ellipse(0, 0, munchkinDia, munchkinDia);
  fill(0);
  ellipse(-8, -5, 4, 6); //left eye
  ellipse(8, -5, 4, 6); //right eye
  strokeWeight(2);
  fill(255, 0, 0);
  triangle(-7, 3, 7, 3, 0, 8);
  pop();
}

function drawMunchkinFinal() {
  push();
  translate(munchkinLocX, munchkinLocY);
  //head
  fill(255, 0, 0, 200); // Light pink color
  ellipse(0, 0, 55, 55);
  //horn
  triangle(-5, -25, 0, -45, 5, -25);
  //eye
  fill(255);
  ellipse(-9, -5, 10, 16); //left eye
  ellipse(9, -5, 10, 16); //right eye
  fill(0);
  ellipse(-9, -5, 5, 10); //left pupil
  ellipse(9, -5, 5, 10); //right pupil
  //nose
  fill(0);
  ellipse(0, 5, 10, 6);
  //connector
  push();
  strokeWeight(2);
  stroke(0);
  line(0, 6, 0, 12);
  pop();
  //lipline
  push();
  stroke(0);
  strokeWeight(2);
  line(-9, 12, 9, 12);
  pop();

  //left fang
  beginShape();
  fill(255);
  strokeWeight(2);
  curveVertex(-9, 12);
  curveVertex(-5.5, 18);
  curveVertex(-2, 12);
  endShape(CLOSE);
  //right fang
  beginShape();
  fill(255);
  strokeWeight(2);
  curveVertex(2, 12);
  curveVertex(5.5, 18);
  curveVertex(9, 12);
  endShape(CLOSE);

  //legs
  fill(255, 0, 0, 200);
  ellipse(0, 35, 18, 30); //middle leg
  rotate(PI / 45);
  ellipse(-10, 35, 18, 30); //middle-1
  rotate(PI / -15);
  ellipse(10, 35, 18, 30); //middle+1
  rotate(PI / 10);
  ellipse(-20, 35, 18, 30); //middle-2
  rotate(PI / -8);
  ellipse(20, 35, 18, 30); //middle+2
  pop();
}

function drawBoat(xBoat, yBoat) {
  push(); //<-----
  translate(100, 200); //<-----

  // light
  fill("yellow");
  ellipse(xBoat - 110, yBoat - 240, 10, 20);

  // body
  fill("brown");
  rect(xBoat - 120, yBoat - 240, 40, 40);
  rect(xBoat - 160, yBoat - 200, 120, 40);

  // window
  fill(198, 238, 255);
  rect(xBoat - 117, yBoat - 237, 34, 37, 5);

  // driver
  textSize(30);
  text("🧑🏻‍✈️", xBoat - 115, yBoat - 205);

  //🧛🥷👨‍🎨👨‍🚀👰‍♀️🦹‍♀️👩‍🎨🧑🏻‍✈️👩‍🎓🧕🏻👨🏻‍🌾👩🏻‍🎤👨🏽‍💼🧝🏿‍♀️🧟🧚🏻‍♂️💁🏻‍♀️ >> CHOOSE YOUR CHARACTER

  // decoration
  fill("yellow");
  rect(xBoat - 160, yBoat - 180, 120, 5);
  fill("green");
  rect(xBoat - 160, yBoat - 175, 120, 5);

  //helper circle
  fill(255, 182, 19);
  circle(xBoat - 100, yBoat - 200, 5);

  pop(); //<----------------------------------
}

function drawFish(fishx, fishy, fishcolor) {
  push();
  //body
  fill(fishcolor);
  ellipse(fishx, fishy, 30, 20);
  //tail
  fill(fishcolor);
  triangle(fishx - 15, fishy, fishx - 20, fishy - 15, fishx - 20, fishy + 15);
  //eye
  fill(0);
  ellipse(fishx + 6, fishy - 4, 4, 4);

  pop();
}

function drawCrab(crabx, craby) {
  push();
  //body
  fill(255, 100, 100);
  ellipse(crabx, craby, 40, 25);

  //eyes
  fill(255);
  ellipse(crabx - 10, craby - 12.5, 10, 10);
  ellipse(crabx + 10, craby - 12.5, 10, 10);

  fill(0);
  ellipse(crabx - 10, craby - 12.5, 5, 5);
  ellipse(crabx + 10, craby - 12.5, 5, 5);

  //legs
  stroke(255, 100, 100);
  strokeWeight(3);

  //left legs
  line(crabx - 20, craby - 5, crabx - 30, craby - 15);
  line(crabx - 20, craby + 5, crabx - 30, craby + 15);

  //right legs
  line(crabx + 20, craby - 5, crabx + 30, craby - 15);
  line(crabx + 20, craby + 5, crabx + 30, craby + 15);

  //claws
  fill(255, 100, 100);
  ellipse(crabx - 25, craby - 10, 10, 10);
  ellipse(crabx + 25, craby - 10, 10, 10);
  pop();
}

function drawPlant() {
  for (let j = 0; j < plantX.length; j++) {
    push();
    translate(plantX[j], 400);
    stroke(0, 128, 0);
    noFill();

    //plant stem
    strokeWeight(4);
    line(0, 0, 0, 500);

    //leaves
    for (let i = 0; i < 6; i++) {
      strokeWeight(2);
      fill(0, 128, 0, 150);
      ellipse(8.5, i * 14, 20, 10);
      ellipse(-8.5, i * 16, 20, 10);
    }
    pop();
  }
}
//press for food
function mousePressed() {
  xPreyArray.push(xBoat);
  yPreyArray.push(yBoat);
  diaPreyArray.push(random(5, 15));

  // foodx = mouseX;
}
