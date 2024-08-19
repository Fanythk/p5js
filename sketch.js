function setup() {
createCanvas(400, 400);
}

function draw() {
  stroke("blue")
  background("red");
  fill("green")
  console.log(mouseIsPressed)
  rect(mouseX,mouseY,20,35)
}