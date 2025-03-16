let canvas;

function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  for (let i = 0; i < 6; i++) {
    strokeWeight(0);
    fill(255 * (i / 5));
    ellipse(width / 2-200, height / 2, 300 - (i * 50), 300 - (i * 50));
  }

 
  strokeWeight(0);
  fill(random(200, 255), random(200, 255), random(200, 255));
  ellipse(mouseX, mouseY, 30, 30);
}

