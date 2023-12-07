let angle = 0;
let slider;

function setup() {
    createCanvas(windowWidth*0.9, windowHeight*0.95);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider.style('transform', 'rotate(270deg)');
}

function draw() {
    background(0);
    angle = slider.value();
    stroke(255);
    strokeWeight(2);

    translate(width * 0.5, height);
    branch(height / 3.25); // adjust the initial length based on the smaller dimension
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
