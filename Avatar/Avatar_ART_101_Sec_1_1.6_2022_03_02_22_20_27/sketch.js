let BigHearts = [];
let fr = 20; //starting FPS
let clr;
let mic;
let micVar;
let look;

function setup() {
  createCanvas(400, 400);
  
  
// Hearts Moving

for (let i = 0; i < 5; i++) {
  let x = random(width * 0.25, width * 0.25);
  let y = random(height * 0.25, height * 0.025);
  BigHearts[i] = new hearts(x, y);
}
  
  frameRate(fr);
  clr = color("pink");
  noStroke();
  
  // Microphone
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
}



function draw() {
  background(255);

  
    // hearts Moving Animation
  for (let i = 0; i < 5; i++) {
    BigHearts[i].display();
    BigHearts[i].move();
  }
  
  // MICROPHONE
  micVar = mic.getLevel();
  sideEye = map(mic.getLevel(), 0, 0.1, 0, 1);

  if (mouseX > 125 && mouseX < 275) {
    if (mouseY > 160 && mouseY < 200) {
      look = 1;
      console.log("high");
    } else {
      look = 0;
      console.log("high");
    }
  } else {
    look = 0;
  }



  drawBlush();
  drawFaceShape();
  if (look == 1) {
    drawBlush();
  }
  drawEyes();

  function drawFaceShape() {
    //Face Shape:

    fill(127, 219, 129);
    noStroke();
    rect(125, 75, 50); // left eye
    rect(225, 75, 50, 50); // right eye
    square(125, 125, 150); // face
  }
  function drawEyes() {
    //Eyes

    fill(51);
    push();
    rotate(sideEye);
    circle(150, 100, 25); // left eye
    circle(250, 100, 25); // right eye

    pop();
  }
  function drawBlush() {
    //Blush in Heart Shapes:
    let c = color("pink");
    push();
    fill(c);
    noStroke();
    ellipse(245, 180, 20, 20); // left circle right heart
    ellipse(255, 180, 20, 20); //right circle right heart
    triangle(235.05, 183, 250, 200, 265.05, 183);

    ellipse(145, 180, 20, 20); // left circle left heart
    ellipse(155, 180, 20, 20); //right circle left heart
    triangle(135.05, 183, 150, 200, 165.05, 183);
    //
    pop();
  }
}
  
class hearts{
  constructor(xpos, ypos) {
   // this.xpos = xpos;
   // this.ypos = ypos;
    
    // OG 
  this.t = int(random(90));
  this.s = random(-1, 1);
    
    // NEW
   this.t = int(random(360));
   this.s = random(-2, 2);
  }

  display() {
    
    push();
    translate(this.xpos, this.ypos);
    rotate(this.t);
    noStroke();

    // Bottom Left Heart
   fill(217,179,255);
   ellipse(50, 310, 45, 45);
   ellipse(85, 310, 45, 45);
   triangle(32.5, 325, 67.5, 355, 102.6, 325);


    // Bottom Right Heart
    fill(255,255,128);
    ellipse(325, 310, 45, 45);
    ellipse(360, 310, 45, 45);
    triangle(307.5, 325, 342.5, 355, 377.6, 325);

    // Top Right Heart
    let c = color("pink");
    fill(c);
    ellipse(325, 50, 45, 45);
    ellipse(360, 50, 45, 45);
    triangle(307.5, 65, 342.5, 95, 377.6, 65);

    pop();
  }

  move() {
    this.t = this.t + this.s}
  
}