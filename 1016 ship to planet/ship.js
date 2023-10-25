function Ship(x, y){
  
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
  this.acc = new JSVector(0, 0);
  this.diam = 10;
  this.theta = 0;
  return this;
}

Ship.prototype.run = function () {
    
    this.update(parent);
    this.render();
    this.checkEdges();
  }

  Ship.prototype.checkEdges = function () {
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
  Ship.prototype.render = function () {
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
    context.beginPath();
    context.moveTo(this.loc.x, this.loc.y);
    context.lineTo(this.loc.x + 30, this.loc.y-10);
    context.lineTo(this.loc.x+25, this.loc.y);
    context.lineTo(this.loc.x +30, this.loc.y +10);
    context.closePath();
    // context.moveTo(this.loc.x, this.loc.y);
    // context.arc(this.loc.x+50, this.loc.y , 20, 0, 2*Math.PI);
    context.save();
  
    context.fill();     // render the fill
    context.stroke();   // render the stroke
  }

  Ship.prototype.update = function (parent){
    //this.acc = JSVector.subGetNew(parent.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.03);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(1);
    this.loc.add(this.vel);
    this.vel.add(this.acc);  
    // this.ship.acc = JSVector.subGetNew(parent.loc, this.loc);
    // context.translate(this.loc.x, this.loc.y);
    // context.rotate(this.acc.getDirection()*(-1));
    // context.translate(-1*this.loc.x, -1*ship.loc.y);
  
    

    
  }