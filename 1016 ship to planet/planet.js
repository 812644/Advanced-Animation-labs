function Planet(x, y, diam){
  
  this.loc = new JSVector(x, y);
  this.vel =new JSVector(0,0);
  this.acc = new JSVector(0,0);
  this.diam = diam;
  this.clr = "rgba(255,255,0,255)";
  this.isOverlapping = false;
  this.ship = new Ship(Math.random()*600, Math.random()*600);
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
    this.loc.x=10 ;
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x < 0){
    this.loc.x= canvas.width - 10;
    this.vel.x=-this.vel.x
  }
  if(this.loc.y > canvas.height){
    this.loc.y = 10;
    this.vel.y=-this.vel.y;
  }
  if(this.loc.y < 0){
    this.loc.y = canvas.height - 10;
    this.vel.y=-this.vel.y;
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
  context.closePath();

  context.fill();     // render the fill
  context.stroke();   // render the stroke
}
  
Planet.prototype.update = function () {
  
  
  if(this.loc.distance(this.ship.loc) < 200){
    this.vel = JSVector.subGetNew(this.loc, this.ship.loc);
    this.vel.limit(3);
  }
  else{
    this.vel.x = Math.random();
    this.vel.y = Math.random();
    this.vel.limit(2);
  }
    this.loc.add(this.vel);
    
    this.vel.add(this.acc);  
    this.ship.acc = JSVector.subGetNew(this.loc, this.ship.loc);

    
  }