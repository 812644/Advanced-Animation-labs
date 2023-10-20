function Planet(x, y, diam){
  
  this.loc = new JSVector(x, y);
  this.vel =new JSVector(Math.random()*2 - 1, Math.random()*2-1);
  this.acc = new JSVector(0,0);
  this.diam = diam;
  this.clr = "rgba(255,255,0,255)";
  this.isOverlapping = false;
  this.ship = new Ship(Math.random()*600, Math.random()*600);
  this.target = new JSVector(canvas.width / 2, canvas.height /2);
  return this;
}
Planet.prototype.run = function () {
 
  
  this.update();
  this.render();
  this.checkEdges();
  this.ship.run();
}

Planet.prototype.checkEdges = function () {
  if(this.loc.x > canvas.width){
    this.loc.x = 0 + this.diam;
  }
  if(this.loc.x < 0){
    this.loc.x = canvas.width - this.diam;
  }
  if(this.loc.y > canvas.height){
    this.loc.y = 0 + this.diam;
  }
  if(this.loc.y < 0){
    this.loc.y = canvas.height - this.diam;
  }
}



// renders a bubble to the canvas
Planet.prototype.render = function () {
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

  context.fill();     // render the fill
  context.stroke();   // render the stroke
}
  
Planet.prototype.update = function () {
  
  this.acc = JSVector.subGetNew(this.target, this.loc);
  this.acc.x = this.acc.x + Math.random()*200;
  this.acc.y = this.acc.y + Math.random()*200;
  this.acc.normalize();
  this.acc.multiply(0.01);
  this.vel.add(this.acc);
  this.vel.limit(0.5);
  if(this.loc.distance(this.ship.loc) <= 200){
    this.vel = JSVector.subGetNew(this.loc, this.ship.loc);
    this.vel.limit(2);
  }
    this.loc.add(this.vel);
    this.vel.add(this.acc);  
    this.ship.acc = JSVector.subGetNew(this.loc, this.ship.loc);
    context.translate(this.ship.loc.x, this.ship.loc.y);
    context.rotate(this.ship.acc.getDirection()*(-1));
    context.translate(-1*this.ship.loc.x, -1*this.ship.loc.y);
  }