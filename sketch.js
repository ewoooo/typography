let modules = [];

function setup() {
  createCanvas(400, 400);
  background(0);

  textStyle(BOLD);
  textSize(400);
  textAlign(CENTER, CENTER);
  fill(255);
  text("A", width / 2, height / 2 + 50);

  let gap = 10;

  for (let y = 0; y < height; y += gap) {
    for (let x = 0; x < width; x += gap) {
      let c = get(x, y);
      let b = brightness(c);

      if (b > 50) {
        modules.push(new Module(new createVector(x, y)))
      }
    }

  }
      console.log(modules)
}

function draw() {
  background(240);
  
  for (let module of modules) {
    module.update();
    module.display();
  }
}
