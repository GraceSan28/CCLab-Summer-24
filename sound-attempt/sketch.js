let mySound1
let mySound2;
let flowers = [];

function preload() {
    mySound1 = loadSound("assets/honk1.mp3");
    mySound2 = loadSound("assets/honk2.mp3");
}

function setup() {
    createCanvas(400, 400);
    flowers.push(new Flower(50, 150, 100, 100, mySound1));
    flowers.push(new Flower(250, 150, 100, 100, mySound2));
}

function draw() {
    background(220);
    flowers.forEach(obj => obj.display());
}

function mousePressed() {
    flowers.forEach(obj => {
        if (obj.contains(mouseX, mouseY)) {
            obj.playSound();
        }
    });
}

class Flower {
    constructor(x, y, w, h, sound) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.sound = sound;
    }

    display() {
        fill(173, 216, 230);
        rect(this.x, this.y, this.width, this.height);
    }

    contains(px, py) {
        return px > this.x && px < this.x + this.width && py > this.y && py < this.y + this.height;
    }

    playSound() {
        if (!this.sound.isPlaying()) {
            this.sound.play();
        }
    }
}