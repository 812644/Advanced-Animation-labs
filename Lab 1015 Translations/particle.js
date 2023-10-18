function Particle(x, y, diam){
  
  this.loc = new JSVector(x, y);
  this.vel =new JSVector(Math.random()*2 - 1, Math.random()*10);
  this.acc = new JSVector(0,0);
  this.diam = diam;
  this.clr = "rgba(255,255,0,255)";
  this.isOverlapping = false;
  this.lifespan = 400;
  this.isDead = false;
  return this;
}
Particle.prototype.run = function () {
 
  
  this.update();
  this.render();
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
  context.arc(this.loc.x, this.loc.y, this.diam, 0,  Math.PI);
  // context.translate(this.loc.x, this.loc.y);
  // context.lineTo(10, 20);
  // context.closePath();
  // context.lineTo(20, 0);
  // context.closePath();
  // context.translate(20, 0);
  // context.lineTo(-10, 20);
  // context.closePath();
  // context.reset();

  context.fill();     // render the fill
  context.stroke();   // render the stroke
}
  
Particle.prototype.update = function () {
    
    this.acc.x = 0;
    this.acc.y = Math.random()*2+2;
    this.acc.normalize();
    this.acc.multiply(.03);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    //this.lifespan-=1;
    if(this.lifespan<=0){
      this.isDead = true;
    }
    
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(0.00000001);
    context.reset();


    
    
  }