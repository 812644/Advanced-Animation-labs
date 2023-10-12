function Particle(x, y, diam){
  
  this.loc = new JSVector(x, y);
  this.vel =new JSVector(Math.random()*2 - 1, Math.random()*2 - 1);
  this.acc = new JSVector(0,0);
  this.diam = diam;
  this.clr = "rgba(255,255,0,255)";
  this.isOverlapping = false;
  this.lifespan = 300;
  this.isDead = false;
  return this;
}
Particle.prototype.run = function () {
 
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Particle.prototype.checkEdges = function () {
  if(this.loc.x > canvas.width){
    this.vel.x = 0 - this.vel.x;
  }
  if(this.loc.x < 0){
    this.vel.x = 0 - this.vel.x;
  }
  if(this.loc.y > canvas.height){
    this.vel.y = 0 - this.vel.y;
  }
  if(this.loc.y < 0){
    this.vel.y = 0 - this.vel.y;
  }
}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Particle.prototype.checkOverlapping = function () {
  this.isOverlapping = false;
  for (let i = 0; i < particles.length; i++) {
    if (this !== particles[i]) {
      let dx = this.x - particles[i].x;
      let dy = this.y - particles[i].y;
      let d = Math.sqrt(dx * dx + dy * dy)
      if (d < this.diam) {
        this.isOverlapping = true;
        return;
      }

    }
  }
}

// renders a bubble to the canvas
Particle.prototype.render = function () {
  if (this.isOverlapping) {
    context.strokeStyle = "blue";  // color to fill
    context.fillStyle = "blue";     // color to stroke
  } else {
    context.strokeStyle = "blue";  // color to fill
    context.fillStyle = "teal";     // color to stroke
  }
  // create the circle path
  context.beginPath();    // clear old path
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
  context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);

  context.fill(0, this.lifespan);     // render the fill
  context.stroke();   // render the stroke
}
  
Particle.prototype.update = function () {
    this.acc.x = Math.random()*2-1;
    this.acc.y = Math.random()*2-1;
    this.acc.normalize();
    this.acc.multiply(.03);
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
    this.lifespan--;
    if(this.lifespan<=0){
      this.isDead = true;
    }


    
    
  }