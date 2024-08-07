function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvas-parent")
  }
  
  function draw() {
    background(220,150,150);
    fill(255);
    rect(30,30,width-60,height-60);
    fill(255,0,0);
    circle(width/2,height/2,30);
  }