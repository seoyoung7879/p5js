let shirtR = 255;
let shirtG = 245;
let shirtB = 210;

let counter = 0;
let pulse = 0;
let pulseDir = 1;

function setup() {
  createCanvas(600, 400);
  //용량제한
  frameRate(30);
}

function draw() {

  counter = counter + 1;
  pulse = pulse + pulseDir;
  
  if (pulse > 20) {
    pulseDir = -1;
  } else if (pulse < 0) {
    pulseDir = 1;
  }


  background(255, 240, 245);

  if (keyIsPressed && keyCode === UP_ARROW) {
    fill(255, 100, 150);
    noStroke();
    
    for (let h = -1; h <= 1; h++) {
      let hX = 300 + h * 100;
      
      let hPositive = h;
      if (h < 0) {
        hPositive = -h;
      }
      
      let baseY = 70 + pulse + hPositive * 30;
      
      ellipse(hX - 15, baseY, 35, 35);
      ellipse(hX + 15, baseY, 35, 35);
      triangle(hX - 32, baseY + 8, hX + 32, baseY + 8, hX, baseY + 45);
    }
  }

  if (mouseIsPressed) {
    for (let r = 0; r < 8; r++) {
      let rColor = 150 + ((counter * 3 + r * 25) % 105);
      let gColor = 100 + ((counter * 2 + r * 15) % 100);
      let bColor = 200 + ((counter * 4 + r * 20) % 55);
      
      fill(rColor, gColor, bColor, 40 - r * 3);
      noStroke();
      ellipse(300, 210, 350 + r * 30 + pulse, 340 + r * 30);
    }
  }

  noStroke();
  fill(100, 60, 40);
  rect(210, 180, 180, 220, 30);
  fill(shirtR, shirtG, shirtB);
  arc(300, 400, 280, 200, PI, 0);
  fill(255);
  quad(285, 310, 250, 360, 300, 380, 300, 310);
  quad(315, 310, 350, 360, 300, 380, 300, 310);
  fill(255, 225, 205);
  rect(285, 260, 30, 50);
  ellipse(300, 210, 160, 150);

  if (mouseIsPressed) {
    fill(255, 80, 80, 200);
    ellipse(245, 235, 40, 25);
    ellipse(355, 235, 40, 25);
  } else {
    fill(255, 150, 150, 120);
    ellipse(245, 235, 30, 18);
    ellipse(355, 235, 30, 18);
  }

  fill(255);
  ellipse(265, 215, 32, 32);
  ellipse(335, 215, 32, 32);
  
  let lx = constrain(265 + (mouseX - 300) / 20, 260, 270);
  let ly = constrain(215 + (mouseY - 200) / 20, 210, 220);
  let rx = constrain(335 + (mouseX - 300) / 20, 330, 340);
  let ry = constrain(215 + (mouseY - 200) / 20, 210, 220);

  if (keyIsPressed && keyCode === UP_ARROW) {
    stroke(60, 40, 40);
    strokeWeight(4);
    noFill();
    arc(265, 215, 25, 10, PI, 0);
    arc(335, 215, 25, 10, PI, 0);
    noStroke();
  } else if (keyIsPressed && keyCode === DOWN_ARROW) {
    stroke(60, 40, 40);
    strokeWeight(4);
    line(255, 215, 275, 215);
    line(325, 215, 345, 215);
    noStroke();
  } else {
    fill(60, 40, 40);
    ellipse(lx, ly, 22, 22);
    ellipse(rx, ry, 22, 22);
    fill(255);
    ellipse(lx - 5, ly - 5, 8, 8);
    ellipse(rx - 5, ry - 5, 8, 8);
    ellipse(lx + 5, ly + 5, 4, 4);
    ellipse(rx + 5, ry + 5, 4, 4);
  }

  noFill();
  stroke(220, 150, 130);
  strokeWeight(2);
  arc(300, 230, 8, 8, 0, PI);

  if (mouseIsPressed) {
    noStroke();
    fill(220, 80, 100);
    ellipse(300, 250, 16, 24);
  } else {
    stroke(220, 80, 100);
    strokeWeight(3);
    noFill();
    arc(300, 245, 18, 12, 0, PI);
  }
  noStroke();
  fill(100, 60, 40);
  ellipse(260, 155, 70, 60);
  ellipse(300, 150, 80, 60);
  ellipse(340, 155, 70, 60);
  ellipse(230, 210, 40, 120);
  ellipse(370, 210, 40, 120);
  noFill();
  stroke(255, 140, 170);
  strokeWeight(12);
  arc(300, 200, 185, 195, PI, 0);
  noStroke();
  fill(255, 140, 170);
  triangle(225, 110, 255, 55, 280, 100);
  triangle(320, 100, 345, 55, 375, 110);  
  fill(255);
  triangle(235, 105, 255, 70, 270, 95);
  triangle(330, 95, 345, 70, 365, 105);
  stroke(255, 140, 170);
  strokeWeight(4);
  fill(255);
  rect(195, 180, 25, 65, 10);
  rect(380, 180, 25, 65, 10);
  stroke(255, 140, 170);
  strokeWeight(4);
  line(210, 230, 250, 250);  
  noStroke();
  fill(255, 140, 170);
  ellipse(250, 250, 12, 12);
  stroke(200, 150, 50);
  strokeWeight(2);
  line(230, 260, 230, 280);
  line(370, 260, 370, 280);
  noStroke();
  fill(255, 215, 0);
  quad(230, 280, 236, 287, 230, 294, 224, 287);
  quad(370, 280, 376, 287, 370, 294, 364, 287);
  fill(100, 200, 255);
  ellipse(230, 287, 5, 5);
  ellipse(370, 287, 5, 5);

  if (keyIsPressed && keyCode === DOWN_ARROW) {
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);    
    fill(255);
    let tSize = 24 + (pulse / 2);
    textSize(tSize);
    textStyle(BOLD);    
    let sway1 = pulse / 2;
    let sway2 = (20 - pulse) / 2;
    let sway3 = pulse / 2;    
    text("z", 380 + sway1, 180 - (counter % 60));
    text("Z", 410 + sway2, 150 - (counter % 60));
    text("Z", 440 + sway3, 110 - (counter % 60));
  }
}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 300, { units: 'frames' });
  } else if (key === 'c' || key === 'C') {
    shirtR = random(100, 255);
    shirtG = random(100, 255);
    shirtB = random(100, 255);
  }

}