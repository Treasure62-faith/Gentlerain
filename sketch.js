// let particles = [];

// function setup() {
//   createCanvas(600, 600);
//   noStroke();
// }

// function draw() {
//   background(255);
//   let gravity = createVector(0, 0.1);

//   // Create new particle at mouse location
//   let p = new Particle(mouseX, mouseY);
//   particles.push(p);

//   // Update and display all particles
//   for (let i = particles.length - 1; i >= 0; i--) {
//     particles[i].applyForce(gravity);
//     particles[i].update();
//     particles[i].show();
//     if (particles[i].isOffScreen()) {
//       particles.splice(i, 1);
//     }
//   }
// }

// class Particle {
//   constructor(x, y) {
//     this.position = createVector(x, y);
//     this.velocity = createVector(random(-1, 1), random(-1, 1));
//     this.acceleration = createVector(0, 0);
//     this.lifespan = 255;
//   }

//   applyForce(force) {
//     this.acceleration.add(force);
//   }

//   update() {
//     this.velocity.add(this.acceleration);
//     this.position.add(this.velocity);
//     this.acceleration.mult(0);
//     this.lifespan -= 2;
//   }

//   show() {
//     fill(0, this.lifespan);
//     ellipse(this.position.x, this.position.y, 10, 10);
//   }

//   isOffScreen() {
//     return this.position.x > width || this.position.x < 0 || this.position.y > height || this.position.y < 0;
//   }
// }
