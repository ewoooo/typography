let modules = [];

function setup() {
	createCanvas(windowWidth, 720);
	background(0);

	textStyle(BOLD);
	if (windowWidth <= 1200) {
		textSize(100);
	} else {
		textSize(400);
	}

	textAlign(CENTER, CENTER);
	fill(255);
	textFont("Geist");
	text("Neuhas", width / 2, height / 2 + 50);

	let gap = 10;

	for (let y = 0; y < height; y += gap) {
		for (let x = 0; x < width; x += gap) {
			let c = get(x, y);
			let b = brightness(c);

			if (b > 50) {
				modules.push(new Module(new createVector(x, y)));
			}
		}
	}
}

function draw() {
	background(0);
	for (let module of modules) {
		module.update();
		module.display();
	}
}
