class Module {
	constructor(pos) {
		this.pos = pos;
		this.vel = new createVector(0, 0);

		this.size = 20;
		this.angle = random(radians(360));
		this.defaultSize = 10;

		this.size = this.defaultSize;
		this.isMoving = false;
		this.origin = this.pos.copy();
		this.trail = [];
	}

	update() {
		// update
		let mouse = new createVector(mouseX, mouseY);
		let d = mouse.dist(this.pos);
		let gravity = new createVector(0, 1);

		if (mouseIsPressed && d < 50) {
			this.isMoving = true;

			// target - origin point >> direction
			let dir = this.pos.copy();
			dir.sub(mouse.copy());
			dir.mult(0.2);

			this.vel.add(dir);
		} else {
			let dir = this.origin.copy();
			dir.sub(this.pos);
			dir.mult(0.005);
			this.vel.add(dir);
		}

		if (this.isMoving) {
			this.vel.mult(0.9);
			this.pos.add(this.vel);
		}

		this.trail.push(this.pos.copy());
		if (this.trail.length > 30) {
			this.trail.shift();
		}
	}

	display() {
		// display
		push();
		noFill();
		beginShape();
		stroke("green");
		for (let path of this.trail) {
			vertex(path.x, path.y);
		}
		endShape();

		noStroke();
		fill("red");
		translate(this.pos.x, this.pos.y);
		rotate(this.angle);
		ellipse(0, 0, this.size, this.size);

		pop();
	}
}
