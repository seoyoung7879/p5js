function setup() {
createCanvas(600, 400);
}
function draw() {
background(255, 240, 245);

noStroke();
fill(100, 60, 40);
rect(210, 180, 180, 220, 30);

fill(255, 245, 210);
arc(300, 400, 280, 200, PI, 0);

fill(255);
quad(285, 310, 250, 360, 300, 380, 300, 310);
quad(315, 310, 350, 360, 300, 380, 300, 310);

fill(255, 225, 205);
rect(285, 260, 30, 50);

ellipse(300, 210, 160, 150);

fill(255, 150, 150, 120);
ellipse(245, 235, 30, 18);
ellipse(355, 235, 30, 18);

fill(255);
ellipse(265, 215, 32, 32);
ellipse(335, 215, 32, 32);

fill(60, 40, 40);
ellipse(265, 215, 22, 22);
ellipse(335, 215, 22, 22);

fill(255);
ellipse(260, 210, 8, 8);
ellipse(330, 210, 8, 8);
ellipse(270, 220, 4, 4);
ellipse(340, 220, 4, 4);

noFill();
stroke(220, 150, 130);
strokeWeight(2);
arc(300, 230, 8, 8, 0, PI);

stroke(220, 80, 100);
strokeWeight(3);
arc(300, 245, 18, 12, 0, PI);

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
ellipse(370, 287, 5, 5);}