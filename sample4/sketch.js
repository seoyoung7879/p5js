function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  frameRate(30);
}

function draw() {
  background(245, 240, 230);

  let t = frameCount * 0.05; 
  let tFast = frameCount * 0.08;


  let bigPulse = sin(t) * 35;
  let midPulse = sin(t * 1.4) * 15;
  let smallPulse = sin(t * 2.1) * 10;


  let orange1 = color(240, 100, 70, 200);
  let orange2 = color(255, 190 + 40 * sin(t * 2), 150 + 30 * cos(t * 2), 220);
  let animatedOrange = lerpColor(orange1, orange2, (sin(t * 1.8) + 1) / 2);

  let teal1 = color(40, 160, 150, 200);
  let teal2 = color(140 + 30 * sin(t * 2), 220, 210 + 25 * cos(t * 2), 210);
  let animatedTeal = lerpColor(teal1, teal2, (cos(t * 1.5) + 1) / 2);

  // 
  let randomShift = random(-15, 15);

  // 위치이동
  let moveX = sin(t) * 20;
  let moveY = cos(t * 0.6) * 12;
  let bounceY = sin(tFast) * 8;

  // 큰 주황 원 크기 + 색상
  noStroke();
  fill(animatedOrange);
  ellipse(150, 200, 250 + bigPulse, 250 + bigPulse);

  // 청록 사각형 (색상 변화)
  fill(animatedTeal);
  rect(300, 100, 180, 250);

  // 노란 삼각형 
  fill(250, 200, 50, 220);
  triangle(200, 350, 400, 150, 500, 380);

  // 남색 원
  fill(20, 40, 90, 210);
  ellipse(450 + moveX, 120 + moveY, 120, 120);

  // 큰 원 테두리
  stroke(30);
  strokeWeight(5);
  noFill();
  ellipse(150, 200, 280 + bigPulse * 0.8, 280 + bigPulse * 0.8);

  // 기타 요소
  stroke(240, 100, 70);
  strokeWeight(3);
  line(50, 50, 250, 350);

  noStroke();
  fill(30, 30, 30, 150);
  rect(50, 80, 120, 40);

  fill(255, 255, 255, 200);
  triangle(100, 100, 150, 50, 200, 120);

  stroke(20, 40, 90);
  strokeWeight(8);
  line(350, 50, 550, 250);

  // 노란원
  noStroke();
  fill(250, 200, 50, 180);
  ellipse(80, 300, 90 + midPulse, 90 + midPulse);

  fill(40, 160, 150, 190);
  triangle(400, 50, 480, 20, 450, 90);

  stroke(30);
  strokeWeight(2);
  noFill();
  rect(120, 150, 300, 200);

  // 주황 원
  noStroke();
  fill(240, 100, 70, 220);
  ellipse(400 + sin(t * 1.8) * 10, 300, 60 + smallPulse, 60 + smallPulse);

  fill(20, 40, 90, 200);
  rect(480, 280, 70, 70);

  stroke(255);
  strokeWeight(4);
  line(480, 280, 550, 350);

  // 흰 원 크기 변화
  noStroke();
  fill(255, 255, 255, 150);
  ellipse(250, 150, 80 + midPulse, 80 + midPulse);

  fill(30, 30, 30, 200);
  triangle(280, 250, 320, 220, 340, 280);

  stroke(250, 200, 50);
  strokeWeight(6);
  noFill();
  ellipse(500, 200, 100 + midPulse, 100 + midPulse);

  noStroke();
  fill(240, 100, 70, 150);
  rect(180, 50, 80, 80);

  // 청록원 바운스
  fill(40, 160, 150, 220);
  ellipse(250, 300 + bounceY, 40 + smallPulse, 40 + smallPulse);

  stroke(20, 40, 90);
  strokeWeight(2);
  line(100, 380, 500, 380);
  line(100, 370, 450, 370);

  noStroke();
  fill(255, 200 + random(-10, 10), 50); // random으로 색변화
  rect(220, 100 + sin(tFast) * 6, 15, 15);
  rect(240, 120 + sin(tFast * 1.1) * 6, 15, 15);
  rect(260, 140 + sin(tFast * 0.9) * 6, 15, 15);
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 300,{ units: 'frames' });
  }
}