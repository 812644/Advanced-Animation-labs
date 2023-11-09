function Snake(x, y){
  this.loc = new JSVector(x+10, y+10);
  this.vel =new JSVector(Math.random()*2 - 1, Math.random()*2 - 1);
  this.acc = new JSVector(0,0);
  this.clr = "rgba(255,255,0,255)";
  return this;
}

Snake.prototype.run = function (parent) {
    this.checkEdges();
    this.update(parent);
    this.render();
  }
  
  //  Check to see if buuble leaves canvas area and reposition in necessary
  Snake.prototype.checkEdges = function () {
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
  
  
  
  // renders a bubble to the canvas
  Snake.prototype.render = function () {
    if (this.isOverlapping) {
      context.strokeStyle = "DarkSeaGreen";  // color to fill
      context.fillStyle = "DarkSeaGreen";     // color to stroke
    } else {
      context.strokeStyle = "DarkSlateGray";  // color to fill
      context.fillStyle = "DarkSlateGray";     // color to stroke
    }
    // create the circle path
    context.save()
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.translate(this.loc.x, this.loc.y);
    context.roate(this.vel.getDirection());
    context.lineTo(parent.loc.x, parent.loc.y);
    context.lineWidth(5);     
    context.stroke();   // render the stroke
    context.closePath();
    context.restore();
  }

  Snake.prototype.update = function (){
    this.acc = new JSVector.subGetNew(mover.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.01);
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
  }