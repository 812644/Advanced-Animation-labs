function Segment(x, y){
  
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(0, 0);
  this.acc = new JSVector(0, 0);
  this.diam = 10;
  this.theta = 0;
  return this;
}

Segment.prototype.run = function () {
    
    this.update(parent);
    this.render();
    this.checkEdges();
  }

  Segment.prototype.checkEdges = function () {
    if(this.loc.x > canvas.width){
      this.loc.x = 0;
    }
    if(this.loc.x < 0){
      this.loc.x = canvas.width;
    }
    if(this.loc.y > canvas.height){
      this.loc.y = 0;
    }
    if(this.loc.y < 0){
      this.loc.y = canvas.height;
    }
  }
  
  
  
  
  //renders a bubble to the canvas
  Segment.prototype.render = function () {
    if (this.isOverlapping) {
      context.strokeStyle = "LightCoral";  // color to fill
      context.fillStyle = "LightCoral";     // color to stroke
    } else {
      context.strokeStyle = "LightCoral";  // color to fill
      context.fillStyle = "LightCoral";     // color to stroke
    }
    // create the circle path
    //context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.save();
    context.beginPath();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.moveTo(0, 0);
    context.lineTo(30, -10);
    context.lineTo(25, 0);
    context.lineTo(30, 10);
    context.closePath();
    
    // context.moveTo(this.loc.x, this.loc.y);
    // context.arc(this.loc.x+50, this.loc.y , 20, 0, 2*Math.PI);
    
  
    context.fill();     // render the fill
    context.stroke();   // render the stroke
    context.restore();
  }

  Segment.prototype.update = function (){
    this.acc.normalize();
    this.acc.multiply(0.04);
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.loc.add(this.vel);
    
    
    

    
  }